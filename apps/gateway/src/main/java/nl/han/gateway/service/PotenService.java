package nl.han.gateway.service;

import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.exceptions.NotOnlineException;
import nl.han.gateway.models.Poot;

import java.util.List;

/**
 * Poten service, this class wel provide some persistence methods
 *
 * @author Thomas
 * @since 0.1
 */
public class PotenService {


    private IPootDAO pootDAO;

    public PotenService() {
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
    }

    /**
     * Method used for saving poot config
     * todo: implement this method, right now it's just a mock
     * todo: this should implement the update
     *
     * @param poot
     * @return
     */
    public void savePootConfig(Poot poot) throws NotFoundException, NotOnlineException {
        this.pootDAO.update(poot);
    }

    /**
     * Return a list of al known Poot objects.
     *
     * @return list of poten
     */
    public List<Poot> getAllPoten() {
        return this.pootDAO.getAll();
    }

    public Poot getPoot(Long pootid) {
        return this.pootDAO.findByPootId(pootid);
    }
}
