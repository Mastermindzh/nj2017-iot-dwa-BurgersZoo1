package nl.han.spark.dao.mongodb;

import com.mongodb.MongoClient;
import nl.han.spark.dao.IPootDAO;
import nl.han.spark.models.Poot;
import nl.han.spark.util.GatewayProperties;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.FindOptions;
import org.mongodb.morphia.query.Query;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.List;

/**
 * Poot DAO with MongoDB implementation
 *
 * @author Thomas
 * @since 0.1
 */
public class PootMongoDAO implements IPootDAO {


    private final MongoClient client;
    private final Datastore datastore;

    public PootMongoDAO() {
        this.client = new MongoClient(GatewayProperties.getProperty("server.database.host")
                , Integer.parseInt(GatewayProperties.getProperty("server.database.port")));
        this.datastore = new Morphia().createDatastore(this.client, "poten");
    }

    @Override
    public Poot save(Poot entity) {
        return this.getOne(this.datastore.save(entity));
    }

    @Override
    /**
     * todo implement this
     */
    public Poot update(Poot entity) {
        throw new NotImplementedException();
    }

    @Override
    public List<Poot> getAll() {
        return this.datastore.find(Poot.class).asList();
    }

    @Override
    public Poot getOne(Key<Poot> key) {
        return this.datastore.getByKey(Poot.class, key);
    }

    @Override
    public void delete(Poot entity) {
        this.datastore.delete(entity);
    }

    @Override
    public Poot findByNodeId(Long nodeId) {
        Query<Poot> query = datastore.createQuery(Poot.class);
        query.filter("nodeId ==", nodeId);
        query.field("nodeId").equal(nodeId);
        return query.get();
    }
}
