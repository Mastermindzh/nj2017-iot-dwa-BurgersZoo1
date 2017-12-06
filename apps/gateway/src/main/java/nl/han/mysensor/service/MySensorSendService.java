package nl.han.mysensor.service;

import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.models.Poot;

public class MySensorSendService {

    private IPootDAO pootDAO;

    public MySensorSendService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
    }

    /**
     * Send a poot id back to a node
     * @param poot
     */
    public void sendPootIdToNode(Poot poot) {
        // todo implement
    }
}
