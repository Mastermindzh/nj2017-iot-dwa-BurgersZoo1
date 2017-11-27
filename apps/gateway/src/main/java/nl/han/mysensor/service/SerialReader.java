package nl.han.mysensor.service;

import gnu.io.*;
import nl.han.mysensor.models.MyMessage;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.util.GatewayProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Enumeration;

public class SerialReader implements SerialPortEventListener {
    SerialPort serialPort;
    /**
     * The port we're normally going to use.
     */
    private static final String PORT_NAMES[] = {
            "/dev/tty.usbserial-A9007UX1", // Mac OS X
            "/dev/ttyACM0", // Raspberry Pi
            "/dev/ttyACM0", // Linux
            "COM3", // Windows
    };
    /**
     * A BufferedReader which will be fed by a InputStreamReader
     * converting the bytes into characters
     * making the displayed results codepage independent
     */
    private BufferedReader input;
    /**
     * The output stream to the port
     */
    private OutputStream output;
    /**
     * Milliseconds to block while waiting for port open
     */
    private static final int TIME_OUT = 2000;
    /**
     * Default bits per second for COM port.
     */
    private static final int DATA_RATE = 115200;

    private MySensorParseService parseService;
    private MySensorService mySensorService;
    private static Logger logger = LoggerFactory.getLogger(SerialReader.class.getName());

    public SerialReader() {
        this.parseService = new MySensorParseService();
        this.mySensorService = new MySensorService();
    }

    public void initialize() {
        String arduinoPort = GatewayProperties.getProperty("arduino.port");
        System.out.println(arduinoPort);
        System.setProperty("gnu.io.rxtx.SerialPorts", arduinoPort);

        CommPortIdentifier portId = null;
        Enumeration portEnum = CommPortIdentifier.getPortIdentifiers();

        //First, Find an instance of serial port as set in PORT_NAMES.
        while (portEnum.hasMoreElements()) {
            CommPortIdentifier currPortId = (CommPortIdentifier) portEnum.nextElement();
            for (String portName : PORT_NAMES) {
                if (currPortId.getName().equals(portName)) {
                    portId = currPortId;
                    break;
                }
            }
        }
        if (portId == null) {
            System.out.println("Could not find COM port.");
            return;
        }

        try {
            // open serial port, and use class name for the appName.
//            serialPort = (SerialPort) portIdentifier.open(portIdentifier.getName(), TIME_OUT);
            serialPort = (SerialPort) portId.open(this.getClass().getName(),
                    TIME_OUT);

            // set port parameters
            serialPort.setSerialPortParams(DATA_RATE,
                    SerialPort.DATABITS_8,
                    SerialPort.STOPBITS_1,
                    SerialPort.PARITY_NONE);

            // open the streams
            input = new BufferedReader(new InputStreamReader(serialPort.getInputStream()));
            output = serialPort.getOutputStream();

            // add event listeners
            serialPort.addEventListener(this);
            serialPort.notifyOnDataAvailable(true);
        } catch (Exception e) {
            System.err.println(e.toString());
        }
    }

    /**
     * This should be called when you stop using the port.
     * This will prevent port locking on platforms like Linux.
     */
    public synchronized void close() {
        if (serialPort != null) {
            serialPort.removeEventListener();
            serialPort.close();
        }
    }

    /**
     * Handle an event on the serial port. Read the data and print it.
     */
    public synchronized void serialEvent(SerialPortEvent oEvent) {
        if (oEvent.getEventType() == SerialPortEvent.DATA_AVAILABLE) {
            try {
                String inputLine = input.readLine();
                logger.debug(String.format("NRF Message: %s", inputLine));
                try {
                    MyMessage message = this.parseService.parseMessage(inputLine);
                    logger.debug(String.format("Message: %s", message.toString()));
                    this.mySensorService.handleIncomingMessage(message);
                } catch (NotFoundException e) {
                    logger.error("Message was: " + inputLine);
                    logger.error("No message", e);
                }
            } catch (Exception e) {
                logger.error("Error while reading serial port", e);
            }
        }
        // Ignore all the other eventTypes, but you should consider the other ones.
    }
}
