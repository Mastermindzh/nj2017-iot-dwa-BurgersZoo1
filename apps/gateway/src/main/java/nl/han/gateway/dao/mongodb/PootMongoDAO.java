package nl.han.gateway.dao.mongodb;

import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import nl.han.gateway.dao.GsonParserUtil;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import static com.mongodb.client.model.Filters.eq;

/**
 * Poot DAO with MongoDB implementation
 *
 * @author Thomas
 * @since 0.1
 */
public class PootMongoDAO implements IPootDAO {

    private final MongoCollection<Document> collection;
    private Gson gson;

    public PootMongoDAO() {
        MongoClient client = new MongoClient(GatewayProperties.getProperty("server.database.host")
                , Integer.parseInt(GatewayProperties.getProperty("server.database.port")));
        MongoDatabase database = client.getDatabase("poten");
        this.collection = database.getCollection("poten");
        this.gson = GsonParserUtil.gson;
    }

    @Override
    public Poot save(Poot entity) {
        Document doc = Document.parse(this.gson.toJson(entity));
        this.collection.insertOne(doc);
        return this.gson.fromJson(doc.toJson(), Poot.class);
    }

    @Override
    public Poot update(Poot entity) {
        Document doc = new Document("$set", Document.parse(this.gson.toJson(entity)));
        this.collection.updateOne(eq("_id", entity.getId()), doc);
        return gson.fromJson(doc.toJson(), Poot.class);
    }

    @Override
    public List<Poot> getAll() {
        List<Poot> pootList = new ArrayList<>();
        this.collection.find().forEach((Consumer<? super Document>) document ->
                pootList.add(gson.fromJson(document.toJson(), Poot.class)));
        return pootList;
    }

    @Override
    public Poot get(Poot entity) {
        return this.get(entity.getId());
    }

    @Override
    public Poot get(ObjectId objectId) {
        return gson.fromJson(this.collection.find(eq("_id", objectId)).first().toJson(), Poot.class);
    }

    @Override
    public Poot findByPootId(Long pootid) throws NotFoundException {
        Document queryResult = this.collection.find(eq("pootid", pootid)).first();
        if(queryResult == null || queryResult.isEmpty()){
            throw new NotFoundException("Could not find poot");
        }
        return this.gson.fromJson(queryResult.toJson(), Poot.class);
    }

    @Override
    public void delete(Poot entity) {
        this.collection.findOneAndDelete(eq("_id", entity.getId()));
    }

    @Override
    public Poot findByNodeId(Long nodeId) {
        Document queryResult = this.collection.find(eq("nodeid", nodeId)).first();
        return this.gson.fromJson(queryResult.toJson(), Poot.class);
    }
}
