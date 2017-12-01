package nl.imacbest.serialPort;

import com.fazecast.jSerialComm.SerialPort;

import java.io.IOException;

public class PortReader {

    public static void main(String[] args) throws InterruptedException {
        SerialListener();
//        serialReader();
    }

    private static void serialReader() {
        SerialReader serialReader = new SerialReader();
        serialReader.initialize();
    }

    private static void SerialListener() throws InterruptedException {
        SerialPort comPort = SerialPort.getCommPorts()[0];
        comPort.openPort();
        comPort.setBaudRate(9600);
        comPort.setComPortTimeouts(SerialPort.TIMEOUT_NONBLOCKING, 100, 0);

        SerialListener serialListener = new SerialListener(comPort);
        (new Thread(serialListener)).start();
        try {
            serialListener.writeString("test");
        } catch (IOException e) {
            e.printStackTrace();
        }

        for (int i = 0; i < 2; i++) {
            System.out.println(String.format("Sleep %d", i));
            Thread.sleep(5000);
        }
        serialListener.stop();
        System.exit(0); // otherwise other thread hangs on inputstream read for some reason
//        comPort.closePort();
    }
}
