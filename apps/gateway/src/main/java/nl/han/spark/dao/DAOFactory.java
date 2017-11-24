package nl.han.spark.dao;

import nl.han.spark.dao.mongodb.DAOFactoryMongoImpl;
import nl.han.spark.util.GatewayProperties;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class DAOFactory {

    public static IDAOFactory getIntance() {
        if ("mongodb".equals(GatewayProperties.getProperty("server.database.driver"))) {
            return new DAOFactoryMongoImpl();
        }
        return null;
    }
}
