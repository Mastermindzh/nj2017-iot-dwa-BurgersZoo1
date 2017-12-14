package nl.imacbest.serialPort;

import com.fazecast.jSerialComm.SerialPort;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class SerialListener implements Runnable {
    private boolean running = true;
    private SerialPort comPort;
    private InputStream in;
    private int TIMEOUT = 5000;

    public SerialListener(SerialPort comPort) {
        this.comPort = comPort;
        in = comPort.getInputStream();
    }

    @Override
    public void run() {
        while (running) {
            readSerial();
        }
        stop();
    }

    private void readSerial() {
        boolean endLine = false;
        StringBuilder buffer = new StringBuilder();
        try {
            while (!endLine && buffer.capacity() < 50) {
                char c = (char) in.read();
                buffer.append(c);
                if (c == '\n') {
                    endLine = true;
                }
            }
            System.out.println(buffer.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public synchronized void writeString(String input) throws IOException {
        OutputStream outputStream = comPort.getOutputStream();
        for (int i = 0; i < input.toCharArray().length; i++) {
            outputStream.write(input.charAt(i));
        }
        outputStream.flush();
    }

    public void stop() {
        this.running = false;
        try {
            in.close();
            this.comPort.getOutputStream().close();

        } catch (IOException e) {
            e.printStackTrace();
        }
        this.comPort.closePort();
    }

}
