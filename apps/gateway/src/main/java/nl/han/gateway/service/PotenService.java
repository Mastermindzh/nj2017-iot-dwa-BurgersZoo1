package nl.han.gateway.service;

import nl.han.backend.services.group1.BackendPootService;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyDataTypes;
import nl.han.mysensor.service.MySensorSendService;

import java.util.List;

/**
 * Poten service, this class wel provide some persistence methods
 *
 * @author Thomas
 * @since 0.1
 */
public class PotenService {


    private final IPootDAO pootDAO;
    private final MySensorSendService sensorSendService;
    private final BackendPootService backendPootService;


    public PotenService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
        sensorSendService = new MySensorSendService();
        this.backendPootService = new BackendPootService();
    }

    public PotenService(IPootDAO pootDAO, MySensorSendService sensorSendService, BackendPootService backendPootService) {
        this.pootDAO = pootDAO;
        this.sensorSendService = sensorSendService;
        this.backendPootService = backendPootService;
    }

    /**
     * Method used for saving poot config
     *
     * @param poot
     * @return
     */
    public void savePootConfig(Poot poot) throws NotFoundException {
        Poot returnPoot = this.pootDAO.update(poot);
        if (returnPoot == null) {
            throw new NotFoundException("Could not find Poot in database");
        }
    }

    /**
     * Return a list of al known Poot objects.
     *
     * @return list of poten
     */
    public List<Poot> getAllPoten() {
        return this.pootDAO.getAll();
    }

    public Poot getPoot(Long pootid) throws NotFoundException {
        return this.pootDAO.findByPootId(pootid);
    }

    /**
     * Resets a Poot
     * This will delete the poot in the database and send a reset message to the Poot.
     *
     * @param poot
     */
    public void resetPoot(Poot poot) throws NotFoundException {
        this.backendPootService.removePootFromBackend(poot);
        MyMessage message = MyMessage.newMyMessage()
                .nodeId(poot.getNodeid())
                .childSensorId(1L)
                .command(MyCommand.SET)
                .payload("RESET")
                .ack(true)
                .setDataType(MyDataTypes.V_VAR5)
                .build();

        this.sensorSendService.sendMessage(message);
        this.pootDAO.delete(poot);
    }
}
