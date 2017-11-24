package nl.han.MySensor.models;

import nl.han.MySensor.models.MyEnums.MyCommand;
import nl.han.MySensor.models.MyEnums.MyInternal;
import nl.han.MySensor.models.MyEnums.MyPresentationType;
import nl.han.MySensor.models.MyEnums.MyType;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class MyMessage {
    private final int nodeId;
    private final int childSensorId;
    private final MyCommand command;
    private final boolean ack;
    private final MyType type;
    private final MyPresentationType presentationType;
    private final MyInternal internalType;
    private final String payload;

    private MyMessage(Builder builder) {
        this.nodeId = builder.nodeId;
        this.childSensorId = builder.childSensorId;
        this.command = builder.command;
        this.ack = builder.ack;
        this.type = builder.type;
        this.presentationType = builder.presentationType;
        this.internalType = builder.internalType;
        this.payload = builder.payload;
    }

    @Override
    public String toString() {
        return "MyMessage{" +
                "nodeId=" + nodeId +
                ", childSensorId=" + childSensorId +
                ", command=" + command +
                ", ack=" + ack +
                ", type=" + type +
                ", presentationType=" + presentationType +
                ", internalType=" + internalType +
                ", payload='" + payload + '\'' +
                '}';
    }

    public static Builder newMyMessage() {
        return new Builder();
    }


    public static final class Builder {
        private int nodeId;
        private int childSensorId;
        private MyCommand command;
        private boolean ack;
        private MyType type;
        private MyPresentationType presentationType;
        private MyInternal internalType;
        private String payload;

        private Builder() {
        }

        public MyMessage build() {
            return new MyMessage(this);
        }

        public Builder nodeId(int nodeId) {
            this.nodeId = nodeId;
            return this;
        }

        public Builder childSensorId(int childSensorId) {
            this.childSensorId = childSensorId;
            return this;
        }

        public Builder command(MyCommand command) {
            this.command = command;
            return this;
        }

        public Builder ack(boolean ack) {
            this.ack = ack;
            return this;
        }

        public Builder type(MyType type) {
            if(this.presentationType != null || this.internalType != null){
                throw new IllegalStateException("Message can only be of one type (REQ/RES, PRESENTATION or INTERNAL)");
            }
            this.type = type;
            return this;
        }

        public Builder presentationType(MyPresentationType presentationType) {
            if(this.type != null || this.internalType != null){
                throw new IllegalStateException("Message can only be of one type (REQ/RES, PRESENTATION or INTERNAL)");
            }
            this.presentationType = presentationType;
            return this;
        }

        public Builder internalType(MyInternal internalType) {
            if(this.presentationType != null || this.type != null){
                throw new IllegalStateException("Message can only be of one type (REQ/RES, PRESENTATION or INTERNAL)");
            }
            this.internalType = internalType;
            return this;
        }

        public Builder payload(String payload) {
            this.payload = payload;
            return this;
        }
    }

    public int getNodeId() {
        return nodeId;
    }

    public int getChildSensorId() {
        return childSensorId;
    }

    public MyCommand getCommand() {
        return command;
    }

    public boolean isAck() {
        return ack;
    }

    public MyType getType() {
        return type;
    }

    public MyPresentationType getPresentationType() {
        return presentationType;
    }

    public MyInternal getInternalType() {
        return internalType;
    }

    public String getPayload() {
        return payload;
    }
}
