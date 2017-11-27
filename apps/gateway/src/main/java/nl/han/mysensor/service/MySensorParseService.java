package nl.han.mysensor.service;

import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyInternal;
import nl.han.mysensor.models.myenums.MyPresentationType;
import nl.han.mysensor.models.myenums.MyType;
import nl.han.mysensor.models.MyMessage;
import nl.han.gateway.exceptions.NotFoundException;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Class parses lines into mysensor messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorParseService {

    private static final String MESSAGE_PATTERN
            = "([0-9]+);([0-9]+);([0-9]+);([0|1]);([0-9]+);([a-zA-Z0-9 ;\\->.]+)";
    private static final Pattern pattern = Pattern.compile(MESSAGE_PATTERN);


    /**
     * Parse a mysensor message
     *
     * @param input
     * @return mysensor message
     * @throws NotFoundException
     */
    public MyMessage parseMessage(String input) throws NotFoundException {
        Matcher m = pattern.matcher(input);
        if (m.find()) {
            if (m.groupCount() == 6) { // six fields in mysensor messages
                return this.buildMessage(m.group(1), m.group(2), m.group(3), m.group(4), m.group(5), m.group(6));
            } else {
                throw new IllegalStateException("Not a valid MySenors message");
            }
        } else {
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
        MyMessage.Builder message = MyMessage.newMyMessage()
                .nodeId(Integer.parseInt(nodeId))
                .childSensorId(Integer.parseInt(childSensor))
                .command(command)
                .ack(Boolean.parseBoolean(ack))
                .payload(payload);
        if (command == MyCommand.PRESENTATION) {
            message.presentationType(MyPresentationType.getByValue(Integer.parseInt(type)));
        } else if (command == MyCommand.SET || command == MyCommand.REQ) {
            message.type(MyType.getByValue(Integer.parseInt(type)));
        }else if(command == MyCommand.INTERNAL){
            message.internalType(MyInternal.getByValue(Integer.parseInt(type)));
        }
        return message.build();
    }
}
