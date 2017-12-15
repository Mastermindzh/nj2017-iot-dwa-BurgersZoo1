package nl.imacbest.mysensor.models;

import nl.imacbest.mysensor.models.myenums.MyCommand;
import nl.imacbest.mysensor.models.myenums.MyDataTypes;

public class MySetMessage extends MyMessage {
    private MyDataTypes type;

    public MySetMessage(Long nodeId, int childSensorId, MyCommand command, boolean ack, String payload, MyDataTypes type) {
        super(nodeId, childSensorId, command, ack, payload);
        this.type = type;
    }

    public MySetMessage() {
    }

    public MyDataTypes getType() {
        return type;
    }

    @Override
    public String toString() {
        return "MySetMessage{" +
                "type=" + type +
                "}, " + super.toString();
    }
}
