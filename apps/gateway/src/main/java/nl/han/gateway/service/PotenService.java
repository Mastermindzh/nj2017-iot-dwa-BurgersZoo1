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
     *
     * @param poot
     * @return
     */
    public Long savePootConfig(Poot poot) throws NotFoundException, NotOnlineException {
//        this.pootDAO.save(poot);
        if (poot.getPootid() == 0) {
            return 57L;
        }
        if (poot.getPootid() == 1) {
            throw new NotFoundException("De poot bestaat niet");
        }
        if (poot.getPootid() == 2) {
            throw new NotOnlineException("De poot is op dit moment niet online en er zal niet geprobeerd worden om een transactie te starten.\n");
        }
        return null;
    }

    /**
     * Return a list of al known Poot objects.
     *
     * @return list of poten
     */
    public List<Poot> getAllPoten() {
        return this.pootDAO.getAll();
    }
}