package nl.imacbest.service;

import nl.imacbest.exceptions.NotFoundException;
import nl.imacbest.exceptions.NotOnlineException;
import nl.imacbest.models.Poot;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class PotenService {

    /**
     * Method used for saving poot config
     * todo: implement this method, right now it's just a mock
     *
     * @param poot
     * @return
     */
    public Long savePootConfig(Poot poot) throws NotFoundException, NotOnlineException {
        if(poot.getPootid() == 0){
            return 57L;
        }
        if(poot.getPootid() == 1){
            throw new NotFoundException("De poot bestaat niet");
        }
        if(poot.getPootid() == 2){
            throw new NotOnlineException("De poot is op dit moment niet online en er zal niet geprobeerd worden om een transactie te starten.\n");
        }
        return null;
    }
}
