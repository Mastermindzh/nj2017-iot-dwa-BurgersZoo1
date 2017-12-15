package nl.imacbest.mysensor.models.myenums;

import nl.imacbest.exceptions.NotFoundException;

/**
 * MySensors command, more info:
 * https://www.mysensors.org/download/serial_api_20#command
 *
 * @author Thomas
 * @since 0.1
 */
public enum MyCommand {

    PRESENTATION(0), //	Sent by a node when they present attached sensors. This is usually done in the presentation() function which runs at startup.
    SET(1), //	This message is sent from or to a sensor when a sensor value should be updated
    REQ(2), //	Requests a variable value (usually from an actuator destined for controller).
    INTERNAL(3), //	This is a special internal message. See table below for the details
    STREAM(4); //	Used for OTA firmware updates


    private final int value;

    MyCommand(final int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    /**
     * Search for enum by value
     *
     * @param searchValue
     * @return enum
     * @throws NotFoundException
     */
    public static MyCommand getByValue(int searchValue) throws NotFoundException {
        for (MyCommand currentEnum : MyCommand.values()) {
            if (currentEnum.getValue() == searchValue) {
                return currentEnum;
            }
        }
        throw new NotFoundException("Unkown presentation type");
    }
}
