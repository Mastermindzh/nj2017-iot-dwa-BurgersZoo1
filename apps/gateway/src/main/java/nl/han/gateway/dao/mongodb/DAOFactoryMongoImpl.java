package nl.han.gateway.dao.mongodb;

import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IDAOFactory;
import nl.han.gateway.dao.IMyMessagesDAO;
import nl.han.gateway.dao.IPootDAO;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class DAOFactoryMongoImpl extends DAOFactory implements IDAOFactory {
    @Override
    public IPootDAO getPootDAO() {
        return new PootMongoDAO();
    }

    @Override
    public IMyMessagesDAO getMyMessageDAO() {
        return new MySensorMongoDAO();
    }
}
