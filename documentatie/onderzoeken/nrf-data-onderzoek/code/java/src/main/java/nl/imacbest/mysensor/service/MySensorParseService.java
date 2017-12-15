package nl.imacbest.mysensor.service;

import nl.imacbest.exceptions.NotFoundException;
import nl.imacbest.mysensor.models.*;
import nl.imacbest.mysensor.models.myenums.MyCommand;
import nl.imacbest.mysensor.models.myenums.MyDataTypes;
import nl.imacbest.mysensor.models.myenums.MyInternal;
import nl.imacbest.mysensor.models.myenums.MyPresentationType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Parser for MySensor messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorParseService {

    private static final String MESSAGE_PATTERN
            = "([0-9]+);([0-9]+);([0-9]+);([0|1]);([0-9]+);(.*)";
    private static final Pattern pattern = Pattern.compile(MESSAGE_PATTERN);
    private static Logger logger = LoggerFactory.getLogger(MySensorSendService.class.getName());

    /**
     * Parse a mysensor message
     *
     * @param input
     * @return mysensor message
     * @throws NotFoundException
     */
    public MyMessage parseToObject(String input) throws NotFoundException {
        Matcher m = pattern.matcher(input);
        if (m.find()) {
            if (m.groupCount() == 6) { // six fields in mysensor messages
                return this.buildMessage(m.group(1), m.group(2), m.group(3), m.group(4), m.group(5), m.group(6));
            } else {
                logger.error("Tried to parse: " + input);
                throw new IllegalStateException("Not a valid MySenors message");
            }
        } else {
            logger.error("Tried to parse: " + input);
            throw new IllegalStateException("No mysensor message found");
        }
    }

    /**
     * Creates a MySensors message object
     *
     * @param nodeId
     * @param childSensor
     * @param commandType
     * @param ack
     * @param type
     * @param payload
     * @return MySenors message object
     * @throws NotFoundException
     */
    private MyMessage buildMessage(String nodeId, String childSensor, String commandType,
                                   String ack, String type, String payload) throws NotFoundException {
        MyCommand command = MyCommand.getByValue(Integer.parseInt(commandType));
        MyMessage.Builder messageBuilder = MyMessage.newMyMessage()
                .nodeId(Long.valueOf(nodeId))
                .childSensorId(Integer.parseInt(childSensor))
                .command(command)
                .ack(Boolean.parseBoolean(ack))
                .payload(payload);

        if (command == MyCommand.PRESENTATION) {
            messageBuilder.presentationType(MyPresentationType.getByValue(Integer.parseInt(type)));
        } else if (command == MyCommand.SET) {
            messageBuilder.setDataType(MyDataTypes.getByValue(Integer.parseInt(type)));
        } else if (command == MyCommand.REQ) {
            messageBuilder.reqDataType(MyDataTypes.getByValue(Integer.parseInt(type)));
        } else if (command == MyCommand.INTERNAL) {
            messageBuilder.internal(MyInternal.getByValue(Integer.parseInt(type)));
        }
        return messageBuilder.build();
    }

    /**
     * Parse a MyMessage object to a MySensor message string.
     *
     * @param message
     * @return MySensor message String
     */
    public String parseToMySensorMessage(MyMessage message) {
        StringBuilder mySensorMessage = new StringBuilder();
        mySensorMessage.append(message.getNodeId());
        mySensorMessage.append(";");
        mySensorMessage.append(message.getChildSensorId());
        mySensorMessage.append(";");
        mySensorMessage.append(message.getCommand().getValue());
        mySensorMessage.append(";");
        mySensorMessage.append(message.isAck() ? 1 : 0);
        mySensorMessage.append(";");
        mySensorMessage.append(getMySensorTypeFromMessage(message));
        mySensorMessage.append(";");
        mySensorMessage.append(message.getPayload());
        mySensorMessage.append("\n");
        return mySensorMessage.toString();
    }

    /**
     * Append the message type value from the message, depending on the implemented object
     *
     * @param message
     */
    private int getMySensorTypeFromMessage(MyMessage message) {
        if (message instanceof MyPresentationMessage) {
            return ((MyPresentationMessage) message).getPresentationType().getValue();
        } else if (message instanceof MySetMessage) {
            return ((MySetMessage) message).getType().getValue();
        } else if (message instanceof MyReqMessage) {
            return ((MyReqMessage) message).getType().getValue();
        } else if (message instanceof MyInternalMessage) {
            return ((MyInternalMessage) message).getInternalType().getValue();
        } else {
            throw new IllegalStateException("Illegal message parse state");
        }
    }
}
