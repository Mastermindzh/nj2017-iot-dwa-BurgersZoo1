package nl.han.mysensor.service.serial;

import gnu.io.*;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.service.MySensorParseService;
import nl.han.mysensor.service.MySensorReceiveService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.TooManyListenersException;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */

public class SerialCommunication  {
    private final String portName;
    private final MySensorParseService parseService;
    private SerialWriter writer;
    private static Logger logger = LoggerFactory.getLogger(SerialCommunication.class.getName());
    private MySensorReceiveService mySensorReceiveService;
    private BufferedReader input;


    public SerialCommunication() {
        this.portName = GatewayProperties.getProperty("arduino.port");
        this.parseService = new MySensorParseService();
        this.mySensorReceiveService = new MySensorReceiveService();
        try {
            this.connect();
        } catch (NoSuchPortException e) {
            e.printStackTrace();
        } catch (PortInUseException e) {
            e.printStackTrace();
        } catch (UnsupportedCommOperationException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void connect() throws NoSuchPortException, PortInUseException, UnsupportedCommOperationException, IOException {
        System.setProperty("gnu.io.rxtx.SerialPorts", this.portName);
        CommPortIdentifier portIdentifier = CommPortIdentifier.getPortIdentifier(this.portName);
        if (portIdentifier.isCurrentlyOwned()) {
            System.out.println("Error: Port is currently in use");
        } else {
            int timeout = 2000;
            CommPort commPort = portIdentifier.open(this.getClass().getName(), timeout);

            if (commPort instanceof SerialPort) {
                SerialPort serialPort = (SerialPort) commPort;
                serialPort.setSerialPortParams(115200,
                        SerialPort.DATABITS_8,
                        SerialPort.STOPBITS_1,
                        SerialPort.PARITY_NONE);

                InputStream in = serialPort.getInputStream();
//                this.input = new BufferedReader(new InputStreamReader(in));
                this.writer = new SerialWriter(serialPort.getOutputStream());

                (new Thread(new SerialReader(in, this))).start();


//                try {
//                    serialPort.addEventListener(this);
//                } catch (TooManyListenersException e) {
//                    e.printStackTrace();
//                }

            } else {
                logger.error("Error: Only serial ports are handled by this example.");
            }
        }
    }

    public void receiveEvent(String inputLine) {
        try {
            logger.info(String.format("NRF Message: %s", inputLine));
            try {
                MyMessage message = this.parseService.parseToObject(inputLine);
                logger.info(String.format("Message: %s", message.toString()));
                this.mySensorReceiveService.handleIncomingMessage(message);
            } catch (NotFoundException e) {
                logger.error("Message was: " + inputLine);
                logger.error("No message", e);
            }
        } catch (Exception e) {
            logger.error("Error while reading serial port", e);
        }
    }

    public void sendSerial(String message) {
        this.writer.sendMessage(message);
    }

//    @Override
//    public void serialEvent(SerialPortEvent serialPortEvent) {
//        logger.info("im here");
//        if (serialPortEvent.getEventType() == SerialPortEvent.DATA_AVAILABLE) {
//            try {
//                String inputLine = input.readLine();
//                logger.info(String.format("NRF Message: %s", inputLine));
//                try {
//                    MyMessage message = this.parseService.parseToObject(inputLine);
//                    logger.info(String.format("Message: %s", message.toString()));
//                    this.mySensorReceiveService.handleIncomingMessage(message);
//                } catch (NotFoundException e) {
//                    logger.error("Message was: " + inputLine);
//                    logger.error("No message", e);
//                }
//            } catch (Exception e) {
//                logger.error("Error while reading serial port", e);
//            }
//        }
//        System.out.println(serialPortEvent.getEventType());
//        // Ignore all the other eventTypes, but you should consider the other ones.
//
//    }
}
