package nl.han.MySensor.service;

import nl.han.MySensor.models.MyMessage;

/**
 * Handle incomming messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorService {

    /**
     * Handles incoming MySensors messages that are being received via the serial port
     *
     * @param message MySensor message
     */
    public void handleIncomingMessage(MyMessage message) {

    }

    /**
     * Send a Poot scan to the backend
     *
     * @param message
     */
    private void sendPootScan(MyMessage message) {

    }
}
