package nl.han.gateway.dao;

import nl.han.gateway.models.Poot;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Key;

/**
 * IPootDAO
 *
 * @author Thomas
 * @since 0.1
 */
public interface IPootDAO extends ICrudDAO<Poot> {

    /**
     * Find one Poot by it's node id
     *
     * @param nodeId
     * @return instance of poot or null
     */
    Poot findByNodeId(Long nodeId);

    /**
     * Get one by object id
     *
     * @param objectId
     * @return
     */
    Poot get(ObjectId objectId);

    /**
     * Get one by key
     *
     * @param key
     * @return
     */
    Poot get(Key<Poot> key);

    /**
     * Find one poot by poot id
     *
     * @param pootid
     * @return
     */
    Poot findByPootId(int pootid);
}
