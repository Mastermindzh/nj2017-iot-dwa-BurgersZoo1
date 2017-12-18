package nl.han.mysensor.service;

import nl.han.Application;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyDataTypes;

public class MySensorSendService {

    private final MySensorParseService parseService;

    public MySensorSendService() {
        this.parseService = new MySensorParseService();
    }

    MySensorSendService(MySensorParseService parseService) {
        this.parseService = parseService;
    }

    /**
     * Send a poot id back to a node
     *
     * @param poot
     */
    public void sendPootIdToNode(Poot poot) {
        MyMessage message = MyMessage.newMyMessage()
                .payload(String.valueOf(poot.getPootid()))
                .ack(true)
                .command(MyCommand.SET)
                .childSensorId(1L)
                .setDataType(MyDataTypes.V_VAR3)
                .nodeId(poot.getNodeid()).build();
        String messageString = parseService.parseToMySensorMessage(message);
        Application.serialCommunication.sendSerial(messageString);
    }

    /**
     * Send a preconfigured message to a node
     *
     * @param message
     */
    public void sendMessage(MyMessage message) {
        String messageString = parseService.parseToMySensorMessage(message);
        this.sendMessage(messageString);
    }

    /**
     * Send a preconfigured and parsed message to a node
     *
     * @param messageString
     */
    public void sendMessage(String messageString) {
        Application.serialCommunication.sendSerial(messageString);
    }
}
