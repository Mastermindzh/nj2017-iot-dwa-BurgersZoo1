package nl.han.mysensor.models;

import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyInternal;

public class MyInternalMessage extends MyMessage {

    private final MyInternal internalType;


    public MyInternalMessage(Long nodeId, int childSensorId, MyCommand command, boolean ack, String payload, MyInternal internalType) {
        super(nodeId, childSensorId, command, ack, payload);
        this.internalType = internalType;
    }

    public MyInternal getInternalType() {
        return internalType;
    }

    @Override
    public String toString() {
        return "MyInternalMessage{" +
                "internalType=" + internalType +
                "}, " + super.toString();
    }
}
