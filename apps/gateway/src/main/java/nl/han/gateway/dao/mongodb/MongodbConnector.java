package nl.han.gateway.dao.mongodb;

import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoDatabase;

import java.util.Collections;

import static nl.han.gateway.util.GatewayProperties.getProperty;
import static nl.han.gateway.util.GatewayProperties.hasProperty;

/**
 * Singleton accessor to the mongo database store. Use this class to get a connection to the mongo database.
 *
 * @author Sijmen
 */
public class MongodbConnector {

    private MongoClient client;

    private static MongodbConnector _instance = new MongodbConnector();
    private MongodbConnector(){ }
    /**
     * Get the public instance of this MongodbConnector. This must be singleton because we only want 1 connection
     * to the mongo database.
     */
    public static MongodbConnector instance(){
        return _instance;
    }


    /**
     * Static accessor to the mongo database. This method is just a wrapper for the
     * ``MongoDatabase.instance().getDatabase()`` call.
     */
    public static MongoDatabase database(){
        return instance().getDatabase();
    }

    /**
     * Get a opened connection to the mongo database.
     */
    public MongoDatabase getDatabase(){
        return this.getClient().getDatabase(getProperty("server.database.name"));
    }

    /**
     * Get a cached connection to the mongo server. Only makes sure only one connection is opened.
     */
    private MongoClient getClient(){
        return client == null ? client = openClient() : client;
    }

    private MongoClient openClient() {
        return hasProperty("server.database.user") ? openAuthenticatedClient() : openUnauthenticatedClient();
    }

    private MongoClient openAuthenticatedClient(){
        return new MongoClient(getServerAddress(), Collections.singletonList(getCredentials()));
    }

    private MongoClient openUnauthenticatedClient(){
        return new MongoClient(getServerAddress());
    }

    private ServerAddress getServerAddress(){
        return new ServerAddress(
                getProperty("server.database.host"),
                Integer.parseInt(getProperty("server.database.port"))
        );
    }

    private MongoCredential getCredentials(){
        return MongoCredential.createCredential(
                getProperty("server.database.user"),
                getProperty("server.database.name"),
                getProperty("server.database.pass").toCharArray()
        );
    }

}
