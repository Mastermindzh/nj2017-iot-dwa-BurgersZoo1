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

    public MySensorReceiveService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
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
                throw new NotImplementedException();
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
            default:
                throw new NotImplementedException();
        }
    }

    private void rangerCardScan(MySetMessage message) {
        BackendPootService backendPootService = new BackendPootService();
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
        BackendPootService backendPootService = new BackendPootService();
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
