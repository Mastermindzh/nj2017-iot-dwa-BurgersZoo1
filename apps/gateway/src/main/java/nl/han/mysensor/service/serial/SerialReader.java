//package nl.han.mysensor.service.serial;
//
//import nl.han.gateway.exceptions.NotFoundException;
//import nl.han.mysensor.models.MyMessage;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//
///**
// * CLASS DESCRIPTION
// *
// * @author Thomas
// * @since 0.1
// */
//public class SerialReader implements Runnable {
//
//    private final SerialCommunication serialCommunication;
//    InputStream in;
//    private static Logger logger = LoggerFactory.getLogger(SerialReader.class.getName());
//
//
//    public SerialReader(InputStream in, SerialCommunication serialCommunication) {
//        this.serialCommunication = serialCommunication;
//        this.in = in;
//    }
//
//    public void run() {
//        while (true) {
//            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(this.in));
//            try {
//                this.serialCommunication.receiveEvent(bufferedReader.readLine());
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//
//    }
//
//
//}
