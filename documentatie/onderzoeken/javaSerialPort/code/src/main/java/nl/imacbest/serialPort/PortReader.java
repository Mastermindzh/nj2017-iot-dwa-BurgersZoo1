package nl.imacbest.serialPort;

import com.fazecast.jSerialComm.SerialPort;
import com.fazecast.jSerialComm.SerialPortDataListener;
import com.fazecast.jSerialComm.SerialPortEvent;

import java.io.InputStream;

public class PortReader {
    public static boolean wait = true;

    public static void main(String[] args) {
        SerialPort comPort = SerialPort.getCommPorts()[0];
        comPort.openPort();
        comPort.setBaudRate(9600);
        comPort.setComPortTimeouts(SerialPort.TIMEOUT_NONBLOCKING, 100, 0);
        comPort.addDataListener(new SerialPortDataListener() {
            @Override
            public int getListeningEvents() {
                return SerialPort.LISTENING_EVENT_DATA_AVAILABLE;
            }

            @Override
            public void serialEvent(SerialPortEvent event) {
                if (event != null) {
                    wait = false;
                }
                System.out.println(new String(event.getReceivedData()));
            }
        });

        while (wait) {

        }


//        InputStream in = comPort.getInputStream();
//        try {
//            for (int j = 0; j < 1000; ++j)
//                System.out.print((char) in.read());
//            in.close();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        comPort.closePort();
    }
}
