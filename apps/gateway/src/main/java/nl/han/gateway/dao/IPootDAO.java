package nl.han.gateway.dao;

import nl.han.gateway.models.Poot;
import org.bson.types.ObjectId;

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
     * Find one poot by poot id
     *
     * @param pootid
     * @return
     */
    Poot findByPootId(Long pootid);
}
