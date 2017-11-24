package nl.han.spark.dao.mongodb;

import com.mongodb.MongoClient;
import nl.han.spark.dao.IPootDAO;
import nl.han.spark.models.Poot;
import nl.han.spark.util.GatewayProperties;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.Morphia;

import java.util.List;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class PootDAO implements IPootDAO {


    private final MongoClient client;
    private final Datastore datastore;

    public PootDAO() {
        this.client = new MongoClient(GatewayProperties.getProperty("server.database.host")
                , Integer.parseInt(GatewayProperties.getProperty("server.database.port")));
        this.datastore = new Morphia().createDatastore(this.client, "poten");
    }

    @Override
    public Poot save(Poot entity) {
        return this.getOne(this.datastore.save(entity));
    }

    @Override
    public List<Poot> getAll() {
        return this.datastore.find(Poot.class).asList();
    }

    @Override
    public Poot getOne(Key<Poot> key) {
        return this.datastore.getByKey(Poot.class, key);
    }
}
