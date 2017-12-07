package nl.han.mysensor.service.serial;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.OutputStream;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class SerialWriter {

    private OutputStream out;
    private static Logger logger = LoggerFactory.getLogger(SerialWriter.class.getName());


    public SerialWriter(OutputStream out) {
        this.out = out;
    }

    public void sendMessage(String message) {
        logger.info(String.format("Sending message: %s", message));
        try {
            for (int i = 0; i < message.length(); i++) {
                this.out.write(message.getBytes()[i]);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
