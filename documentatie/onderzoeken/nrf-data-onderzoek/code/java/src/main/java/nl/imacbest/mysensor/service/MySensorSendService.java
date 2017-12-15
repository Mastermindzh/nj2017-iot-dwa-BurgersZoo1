package nl.imacbest.mysensor.service;

import nl.imacbest.Application;
import nl.imacbest.mysensor.models.MyMessage;
import nl.imacbest.mysensor.models.myenums.MyCommand;
import nl.imacbest.mysensor.models.myenums.MyDataTypes;

public class MySensorSendService {

    private final MySensorParseService parseService;

    public MySensorSendService() {
        this.parseService = new MySensorParseService();
    }

    MySensorSendService(MySensorParseService parseService) {
        this.parseService = parseService;
    }

//    /**
//     * Send a poot id back to a node
//     *
//     * @param poot
//     */
//    public void sendPootIdToNode(Long id) {
//        MyMessage message = MyMessage.newMyMessage()
//                .payload(String.valueOf(id))
//                .ack(true)
//                .command(MyCommand.SET)
//                .childSensorId(1)
//                .setDataType(MyDataTypes.V_VAR3)
//                .nodeId(poot.getNodeid()).build();
//        String messageString = parseService.parseToMySensorMessage(message);
//        Application.serialCommunication.sendSerial(messageString);
//    }

    public void sendToNode(MyMessage message){
        String messageString = parseService.parseToMySensorMessage(message);
        Application.serialCommunication.sendSerial(messageString);

    }
}
