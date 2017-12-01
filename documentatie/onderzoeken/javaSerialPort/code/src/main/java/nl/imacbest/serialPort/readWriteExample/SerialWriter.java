package nl.imacbest.serialPort.readWriteExample;

import java.io.IOException;
import java.io.OutputStream;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class SerialWriter implements Runnable {

    OutputStream out;

    public SerialWriter(OutputStream out) {
        this.out = out;
    }

    public void run() {
        try {
            int c = 0;
            while ((c = System.in.read()) > -1) {
                this.out.write(c);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public static void main(String[] args) {
        try {
            TwoWaySerialComm com = new TwoWaySerialComm();
            com.connect("COM3");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
