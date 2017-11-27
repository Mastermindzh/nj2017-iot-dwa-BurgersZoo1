package nl.han.mysensor.models.myenums;

import nl.han.gateway.exceptions.NotFoundException;

/**
 * MySensors internal states, more info:
 * https://www.mysensors.org/download/serial_api_20#internal
 *
 * @author Thomas
 * @since 0.1
 */
public enum MyInternal {

    I_BATTERY_LEVEL(0),          //	Use this to report the battery level (in percent 0-100).
    I_TIME(1),                   //	Sensors can request the current time from the Controller using this message. The time will be reported as the seconds since 1970
    I_VERSION(2),                //	Used to request gateway version from controller.
    I_ID_REQUEST(3),             //	Use this to request a unique node id from the controller.
    I_ID_RESPONSE(4),            //	Id response back to node. Payload contains node id.
    I_INCLUSION_MODE(5),         //	Start/stop inclusion mode of the Controller (1=start, 0=stop).
    I_CONFIG(6),                 //	Config request from node. Reply with (M)etric or (I)mperal back to sensor.
    I_FIND_PARENT(7),            //	When a sensor starts up, it broadcast a search request to all neighbor nodes. They reply with a I_FIND_PARENT_RESPONSE.
    I_FIND_PARENT_RESPONSE(8),   //	Reply message type to I_FIND_PARENT request.
    I_LOG_MESSAGE(9),            //	Sent by the gateway to the Controller to trace-log a message
    I_CHILDREN(10),              //	A message that can be used to transfer child sensors (from EEPROM routing table) of a repeating node.
    I_SKETCH_NAME(11),           //	Optional sketch name that can be used to identify sensor in the Controller GUI
    I_SKETCH_VERSION(12),        //	Optional sketch version that can be reported to keep track of the version of sensor in the Controller GUI.
    I_REBOOT(13),                //	Used by OTA firmware updates. Request for node to reboot.
    I_GATEWAY_READY(14),         //	Send by gateway to controller when startup is complete.
    I_SIGNING_PRESENTATION(15),  //	Provides signing related preferences (first byte is preference version).
    I_NONCE_REQUEST(16),         //	Used between sensors when requesting nonce.
    I_NONCE_RESPONSE(17),        //	Used between sensors for nonce response.
    I_HEARTBEAT_REQUEST(18),     //	Heartbeat request
    I_PRESENTATION(19),          //	Presentation message
    I_DISCOVER_REQUEST(20),      //	Discover request
    I_DISCOVER_RESPONSE(21),     //	Discover response
    I_HEARTBEAT_RESPONSE(22),    //	Heartbeat response
    I_LOCKED(23),                //	Node is locked (reason in string-payload)
    I_PING(24),                  //	Ping sent to node, payload incremental hop counter
    I_PONG(25),                  //	In return to ping, sent back to sender, payload incremental hop counter
    I_REGISTRATION_REQUEST(26),  //	Register request to GW
    I_REGISTRATION_RESPONSE(27), //	Register response from GW
    I_DEBUG(28);                 //	Debug message

    private final int value;

    MyInternal(final int value) {
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
    public static MyInternal getByValue(int searchValue) throws NotFoundException {
        for (MyInternal currentEnum : MyInternal.values()) {
            if (currentEnum.getValue() == searchValue) {
                return currentEnum;
            }
        }
        throw new NotFoundException("Unkown presentation type");
    }
}
