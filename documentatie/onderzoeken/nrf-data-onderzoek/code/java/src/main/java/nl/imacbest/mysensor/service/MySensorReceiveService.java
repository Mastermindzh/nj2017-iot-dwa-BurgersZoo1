package nl.imacbest.mysensor.service;

import nl.imacbest.exceptions.NotImplementedException;
import nl.imacbest.mysensor.models.*;
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

    private MySensorSendService sendService;

    public MySensorReceiveService() {
        this.sendService = new MySensorSendService();
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
                break;
            case V_VAR2:
                // route for handeling ranger scans
                break;
            case V_VAR3: // used for sending to nodes
                break;
            case V_TEMP:
                break;
            case V_HUM:
                break;
            default:
                throw new NotImplementedException();
        }
    }

}
