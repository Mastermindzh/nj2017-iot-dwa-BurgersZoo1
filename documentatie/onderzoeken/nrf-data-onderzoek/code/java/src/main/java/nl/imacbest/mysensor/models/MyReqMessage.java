package nl.imacbest.mysensor.models;

import nl.imacbest.mysensor.models.myenums.MyCommand;
import nl.imacbest.mysensor.models.myenums.MyDataTypes;

public class MyReqMessage extends MyMessage {

    private MyDataTypes type;

    public MyReqMessage(Long nodeId, int childSensorId, MyCommand command, boolean ack, String payload, MyDataTypes type) {
        super(nodeId, childSensorId, command, ack, payload);
        this.type = type;
    }

    public MyReqMessage() {
    }

    public MyDataTypes getType() {
        return type;
    }

    @Override
    public String toString() {
        return "MyReqMessage{" +
                "type=" + type +
                "}, " + super.toString();
    }
}
