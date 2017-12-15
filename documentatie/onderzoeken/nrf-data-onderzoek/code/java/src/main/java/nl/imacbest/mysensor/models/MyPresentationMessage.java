package nl.imacbest.mysensor.models;

import nl.imacbest.mysensor.models.myenums.MyCommand;
import nl.imacbest.mysensor.models.myenums.MyPresentationType;

public class MyPresentationMessage extends MyMessage {

    private MyPresentationType presentationType;

    public MyPresentationMessage(Long nodeId, int childSensorId, MyCommand command, boolean ack, String payload, MyPresentationType presentationType) {
        super(nodeId, childSensorId, command, ack, payload);
        this.presentationType = presentationType;
    }

    public MyPresentationMessage() {
    }

    public MyPresentationType getPresentationType() {
        return presentationType;
    }

    @Override
    public String toString() {
        return "MyPresentationMessage{" +
                "presentationType=" + presentationType +
                "}, " + super.toString();
    }
}
