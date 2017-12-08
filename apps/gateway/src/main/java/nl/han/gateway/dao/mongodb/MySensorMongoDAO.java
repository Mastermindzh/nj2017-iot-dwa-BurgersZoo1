package nl.han.gateway.dao.mongodb;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.Block;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.sun.org.apache.xpath.internal.SourceTree;
import nl.han.gateway.dao.IMyMessagesDAO;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.*;
import nl.han.mysensor.service.MySensorReceiveService;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.Morphia;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class MySensorMongoDAO implements IMyMessagesDAO {

    private final MongoClient client;
    private MongoCollection<Document> collection;
    private Gson gson = new Gson();
    private static Logger logger = LoggerFactory.getLogger(MySensorReceiveService.class.getName());


    public MySensorMongoDAO() {
        this.client = new MongoClient(GatewayProperties.getProperty("server.database.host")
                , Integer.parseInt(GatewayProperties.getProperty("server.database.port")));
        MongoDatabase database = this.client.getDatabase("mymessages");
        this.collection = database.getCollection("mymessages");
    }

    @Override
    public MyMessage save(MyMessage entity) {
        Document doc = Document.parse(gson.toJson(entity));
        doc.append("class", entity.getClass().getCanonicalName());
        this.collection.insertOne(doc);
        return this.get((ObjectId) doc.get("_id"));
    }

    @Override
    public MyMessage update(MyMessage entity) {
        return null;
    }

    @Override
    public List<MyMessage> getAll() {
        List<MyMessage> messageList = new ArrayList<>();
        this.collection.find().forEach((Consumer<? super Document>) document -> {
            MyMessage message = null;
            try {
                message = (MyMessage) gson.fromJson(document.toJson(), Class.forName(String.valueOf(document.get("class"))));
            } catch (ClassNotFoundException e) {
                logger.error("Could not cast given document to object", e);
            }
            messageList.add(message);
        });
        return messageList;
    }

    @Override
    public MyMessage get(MyMessage entity) {
        return null;
    }

    @Override
    public MyMessage get(ObjectId objectId) {
        return null;
//        return this.datastore.get(MyMessage.class, objectId);
    }

    @Override
    public MyMessage get(Key<MyMessage> key) {
        return null;
//        return this.datastore.get(key.getType(), key.getId());
    }


    @Override
    public void delete(MyMessage entity) {

    }


}
