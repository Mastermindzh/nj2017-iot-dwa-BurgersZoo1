package nl.han.gateway.dao.mongodb;

import com.mongodb.MongoClient;
import nl.han.gateway.dao.IMyMessagesDAO;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.*;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Key;
import org.mongodb.morphia.Morphia;

import java.util.ArrayList;
import java.util.List;

public class MySensorMongoDAO implements IMyMessagesDAO {

    private final MongoClient client;
    private final Datastore datastore;

    public MySensorMongoDAO() {
        this.client = new MongoClient(GatewayProperties.getProperty("server.database.host")
                , Integer.parseInt(GatewayProperties.getProperty("server.database.port")));
        this.datastore = new Morphia()
                .map(MyMessage.class)
                .map(MyInternalMessage.class)
                .map(MyPresentationMessage.class)
                .map(MyReqMessage.class)
                .map(MySetMessage.class)
                .createDatastore(this.client, "mymessages");
    }

    @Override
    public MyMessage save(MyMessage entity) {
        Key<MyMessage> messageKey = this.datastore.save(entity);

        return this.get(messageKey);
    }

    @Override
    public MyMessage update(MyMessage entity) {
        return null;
    }

    @Override
    public List<MyMessage> getAll() {
        List<MyMessage> resultList = new ArrayList<>();
        resultList.addAll(this.datastore.find(MyInternalMessage.class).asList());
        resultList.addAll(this.datastore.find(MyPresentationMessage.class).asList());
        resultList.addAll(this.datastore.find(MyReqMessage.class).asList());
        resultList.addAll(this.datastore.find(MySetMessage.class).asList());
        resultList.sort((message1, message2) -> {
            if (message1.getId().getTimestamp() > message2.getId().getTimestamp()) {
                return 1;
            } else if (message1.getId().getTimestamp() == message2.getId().getTimestamp()) {
                return 0;
            }
            return -1;
        });

        return resultList;
    }

    @Override
    public MyMessage get(MyMessage entity) {
        return null;
    }

    @Override
    public MyMessage get(ObjectId objectId) {
        return this.datastore.get(MyMessage.class, objectId);
    }

    @Override
    public MyMessage get(Key<MyMessage> key) {
        return this.datastore.get(key.getType(), key.getId());
    }


    @Override
    public void delete(MyMessage entity) {

    }
}
