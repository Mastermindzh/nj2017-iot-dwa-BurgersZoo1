package nl.han.mysensor.models;

import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyDataTypes;

public class MySetMessage extends MyMessage {
    private final MyDataTypes type;

    public MySetMessage(Long nodeId, int childSensorId, MyCommand command, boolean ack, String payload, MyDataTypes type) {
        super(nodeId, childSensorId, command, ack, payload);
        this.type = type;
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
