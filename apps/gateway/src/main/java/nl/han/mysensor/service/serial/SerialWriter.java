package nl.han.mysensor.service.serial;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class SerialWriter {

    private BufferedOutputStream out;
    private static Logger logger = LoggerFactory.getLogger(SerialWriter.class.getName());


    public SerialWriter(OutputStream out) {
        this.out = new BufferedOutputStream(out);
    }

    public void sendMessage(String message) {
        logger.info(String.format("Sending message: %s", message));
        try {
            this.out.write((message + "\r\n").getBytes());
            this.out.flush();

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                this.out.close();
            } catch (IOException e) {
                logger.error("Error while closing stream", e);
            }
        }
    }
}
