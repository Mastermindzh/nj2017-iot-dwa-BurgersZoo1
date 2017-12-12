package nl.han.gateway.dao;

import nl.han.mysensor.models.MyMessage;
import org.bson.types.ObjectId;

public interface IMyMessagesDAO extends ICrudDAO<MyMessage> {
    MyMessage get(ObjectId objectId);
}
