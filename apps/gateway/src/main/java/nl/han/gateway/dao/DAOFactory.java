package nl.han.gateway.dao;

import nl.han.gateway.dao.mongodb.DAOFactoryMongoImpl;
import nl.han.gateway.util.GatewayProperties;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class DAOFactory {

    public static IDAOFactory getInstance() {
        if ("mongodb".equals(GatewayProperties.getProperty("server.database.driver"))) {
            return new DAOFactoryMongoImpl();
        }
        return null;
    }
}
