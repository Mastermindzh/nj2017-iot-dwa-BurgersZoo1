package nl.han.gateway.service;

import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotFoundException;
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

    public Poot getPoot(Long pootid) {
        return this.pootDAO.findByPootId(pootid);
    }
}
