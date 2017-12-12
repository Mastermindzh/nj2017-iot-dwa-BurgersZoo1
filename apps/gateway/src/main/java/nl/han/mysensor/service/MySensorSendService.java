package nl.han.mysensor.service;

import nl.han.Application;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyDataTypes;

public class MySensorSendService {

    private final MySensorParseService parseService;
    private IPootDAO pootDAO;

    public MySensorSendService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
        this.parseService = new MySensorParseService();
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
                .childSensorId(1)
                .setDataType(MyDataTypes.V_VAR3)
                .nodeId(poot.getNodeid()).build();
        String messageString = parseService.parseToMySensorMessage(message);
        Application.serialCommunication.sendSerial(messageString);
    }
}
