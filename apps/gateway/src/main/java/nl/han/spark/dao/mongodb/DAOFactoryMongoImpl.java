package nl.han.spark.dao.mongodb;

import nl.han.spark.dao.DAOFactory;
import nl.han.spark.dao.IDAOFactory;
import nl.han.spark.dao.IPootDAO;

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
}
