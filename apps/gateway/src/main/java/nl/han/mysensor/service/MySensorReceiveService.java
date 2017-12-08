package nl.han.mysensor.service;

import nl.han.Application;
import nl.han.backend.services.BackendPootServiceBase;
import nl.han.backend.services.group1.BackendPootService;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IMyMessagesDAO;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotImplementedException;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

/**
 * Handle incomming messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorReceiveService {

    private static Logger logger = LoggerFactory.getLogger(MySensorReceiveService.class.getName());
    private final IMyMessagesDAO myMessageDAO;
    private IPootDAO pootDAO;
    private BackendPootServiceBase backendPootServiceGroup1;
    private List<BackendPootServiceBase> backendPootServiceList = new ArrayList<>();

    public MySensorReceiveService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
        this.myMessageDAO = DAOFactory.getInstance().getMyMessageDAO();
        this.backendPootServiceGroup1 = new BackendPootService();
        this.backendPootServiceList.add(backendPootServiceGroup1);
        this.backendPootServiceList.add(new nl.han.backend.services.group2.BackendPootService());
    }

    /**
     * Handles incoming MySensors messages that are being received via the serial port
     *
     * @param message mysensor message
     */
    public void handleIncomingMessage(MyMessage message) {
        logger.debug(String.format("new message: %s", message.toString()));
        this.myMessageDAO.save(message);
        if (message instanceof MyPresentationMessage) {
            handleIncomingPresentationMessages((MyPresentationMessage) message);
        } else if (message instanceof MySetMessage) {
            handleIncomingSetMessages((MySetMessage) message);
        } else if (message instanceof MyReqMessage) {
            logger.info(String.format("Not implemented yet, message: %s", message.toString()));
            throw new NotImplementedException();
        } else if (message instanceof MyInternalMessage) {
            handleIncomingInternalMessages((MyInternalMessage) message);
        } else {
            throw new IllegalStateException("Illegal message state");
        }
    }

    private void handleIncomingInternalMessages(MyInternalMessage message) {
        switch (message.getInternalType()) {
            case I_ID_REQUEST:
                logger.debug(String.format("Requesting id, message: %s", message.toString()));
                break;
            case I_LOG_MESSAGE:
                logger.debug(String.format("Not implemented yet, message: %s", message.toString()));
                break;
            default:
                logger.info(String.format("Not implemented yet, message: %s", message.toString()));
        }
    }

    /**
     * Handle tasks for incoming Presentation messages
     *
     * @param message
     */
    private void handleIncomingPresentationMessages(MyPresentationMessage message) {
        switch (message.getPresentationType()) {
            case S_ARDUINO_NODE:
                // do stuff for arduino node
                break;
            case S_ARDUINO_REPEATER_NODE:
                // do repeater stuff
                break;
            default:
                logger.debug("Presentation is not yet implemented for message type: " + message.getPresentationType());
        }
    }

    /**
     * Handle tasks for incoming set messages
     *
     * @param message
     */
    private void handleIncomingSetMessages(MySetMessage message) {
        switch (message.getType()) {
            case V_VAR1:
                // should contain either it's poot id or a 0x00 value
                newNodeSubscribe(message);
                break;
            case V_VAR2:
                // route for handeling ranger scans
                rangerCardScan(message);
                break;
            case V_VAR3: // used for sending to nodes
                break;
            case V_TEMP:
                this.sendTemperatureValue(message);
                break;
            case V_HUM:
                this.sendHumidityValue(message);
                break;
            default:
                throw new NotImplementedException();
        }
    }

    /**
     * Send humidity sensor values to backend
     *
     * @param message
     */
    private void sendHumidityValue(MySetMessage message) {
        logger.debug(String.format("Sending humidity value to backend, node id #%d", message.getNodeId()));
        logger.debug(message.toString());
        Poot poot = this.pootDAO.findByNodeId(message.getNodeId());
        this.backendPootServiceList.forEach(service -> service.sendHumidityLoggingToBackend(message, poot));
    }

    /**
     * Send temperature value to backend
     *
     * @param message
     */
    private void sendTemperatureValue(MySetMessage message) {
        logger.debug(String.format("Sending tempature value to backend, node id #%d", message.getNodeId()));
        logger.debug(message.toString());
        Poot poot = this.pootDAO.findByNodeId(message.getNodeId());
        this.backendPootServiceList.forEach(service -> service.sendTemperatureLoggingToBackend(message, poot));
    }

    /**
     * Send ranger card scan to backend
     *
     * @param message
     */
    private void rangerCardScan(MySetMessage message) {
        Poot poot = this.pootDAO.findByNodeId(message.getNodeId());
        this.backendPootServiceList.forEach(service -> service.sendRangerCardScanToBackend(message, poot));
    }

    /**
     * Function that maps the newly online nodes to poot id's.
     *
     * @param message
     */
    private void newNodeSubscribe(MyMessage message) {
        logger.info(String.format("Registering new node, node id: #%d pootid: #%s",
                message.getNodeId(), message.getPayload()));
        Poot poot = null;
        poot = this.pootDAO.findByPootId(Long.valueOf(message.getPayload()));
        if (poot == null) {
            logger.info("Unknown poot, register node");
            Poot newPoot = new Poot();
            newPoot.setNodeid(message.getNodeId());
            newPoot.setPootid(backendPootServiceGroup1.getNewPootIdFromBackend());
            poot = this.pootDAO.save(newPoot);
        } else {
            poot.setNodeid(message.getNodeId());
            poot = this.pootDAO.update(poot);
        }

        MySensorSendService sendService = new MySensorSendService();
        sendService.sendPootIdToNode(poot);

    }
}
