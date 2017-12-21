package nl.han.gateway.dao;

import nl.han.mysensor.models.MyMessage;
import org.bson.types.ObjectId;

import java.util.List;

public interface IMyMessagesDAO extends ICrudDAO<MyMessage> {
    MyMessage get(ObjectId objectId);

    /**
     * Method to get filtered results of mymessages in the DB
     *
     * @param searchParams
     * @param page
     * @param size
     * @param order
     * @return
     */
    List<MyMessage> getAllFiltered(String[] searchParams, int page, int size, String order);
}
