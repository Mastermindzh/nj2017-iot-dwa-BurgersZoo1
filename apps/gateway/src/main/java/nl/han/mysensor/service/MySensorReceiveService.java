package nl.han.mysensor.service;

import nl.han.backend.services.BackendPootService;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotImplementedException;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Handle incomming messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorReceiveService {

    private static Logger logger = LoggerFactory.getLogger(MySensorReceiveService.class.getName());
    private IPootDAO pootDAO;
    private BackendPootService backendPootService;

    public MySensorReceiveService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
        this.backendPootService = new BackendPootService();
    }

    /**
     * Handles incoming MySensors messages that are being received via the serial port
     *
     * @param message mysensor message
     */
    public void handleIncomingMessage(MyMessage message) {
        logger.debug(String.format("new message: %s", message.toString()));
        if (message instanceof MyPresentationMessage) {
            handleIncomingPresentationMessages((MyPresentationMessage) message);
        } else if (message instanceof MySetMessage) {
            handleIncomingSetMessages((MySetMessage) message);
        } else if (message instanceof MyReqMessage) {
            logger.info(String.format("Not implemented yet, message: %s", message.toString()));
            throw new NotImplementedException();
        } else if (message instanceof MyInternalMessage) {
            logger.info(String.format("Not implemented yet, message: %s", message.toString()));
            throw new NotImplementedException();
        } else {
            throw new IllegalStateException("Illegal message state");
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
        this.backendPootService.sendHumidityLoggingToBackend(message, poot);
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
        this.backendPootService.sendTemperatureLoggingToBackend(message, poot);
    }

    /**
     * Send ranger card scan to backend
     *
     * @param message
     */
    private void rangerCardScan(MySetMessage message) {
        Poot poot = this.pootDAO.findByNodeId(message.getNodeId());
        backendPootService.sendRangerCardScanToBackend(message, poot);
    }

    /**
     * Function that maps the newly online nodes to poot id's.
     * todo: Deze methode werkt nog niet zoals het aanmelden zou moeten werken!
     *
     * @param message
     */
    private void newNodeSubscribe(MyMessage message) {
        logger.info(String.format("Registering new node, node id: #%d pootid: #%s",
                message.getNodeId(), message.getPayload()));
        Poot poot = this.pootDAO.findByPootId(Integer.parseInt(message.getPayload()));
        if (poot == null) {
            logger.info("Unknown poot, register node");
            Poot newPoot = new Poot();
            newPoot.setNodeId(message.getNodeId());
            newPoot.setPootid(backendPootService.getNewPootIdFromBackend());
            this.pootDAO.save(newPoot);
        } else {
            poot.setNodeId(message.getNodeId());
            this.pootDAO.update(poot);
        }

        MySensorSendService sendService = new MySensorSendService();
        sendService.sendPootIdToNode(poot);

    }
}
