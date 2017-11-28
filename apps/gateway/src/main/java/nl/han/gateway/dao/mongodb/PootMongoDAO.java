package nl.han.gateway.dao.mongodb;

import com.mongodb.MongoClient;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.query.UpdateOperations;
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
        return this.get(this.datastore.save(entity));
    }

    @Override
    public Poot update(Poot entity) {
        UpdateOperations<Poot> updateOperations = this.datastore.createUpdateOperations(Poot.class);
        updateOperations.set("pootid", entity.getPootid());
        updateOperations.set("nodeId", entity.getNodeId());
        if (entity.getWeetjes() != null) {
            updateOperations.set("weetjes", entity.getWeetjes());
        }
        if (entity.getDierengeluid() != null) {
            updateOperations.set("dierengeluid", entity.getDierengeluid());
        }
        this.datastore.update(entity, updateOperations);
        return this.get(entity.getId());
    }

    @Override
    public List<Poot> getAll() {
        return this.datastore.find(Poot.class).asList();
    }

    @Override
    public Poot get(Poot entity) {
        return this.get(entity.getId());
    }

    @Override
    public Poot get(ObjectId objectId) {
        return this.datastore.get(Poot.class, objectId);
    }

    @Override
    public Poot get(Key<Poot> key) {
        return this.datastore.getByKey(Poot.class, key);
    }

    @Override
    public Poot findByPootId(int pootid) {
        Query<Poot> query = datastore.createQuery(Poot.class);
        query.field("pootid").equal(pootid);
        return query.get();
    }

    @Override
    public void delete(Poot entity) {
        this.datastore.delete(entity);
    }

    @Override
    public Poot findByNodeId(Long nodeId) {
        Query<Poot> query = datastore.createQuery(Poot.class);
        query.field("nodeId").equal(nodeId);
        return query.get();
    }
}
