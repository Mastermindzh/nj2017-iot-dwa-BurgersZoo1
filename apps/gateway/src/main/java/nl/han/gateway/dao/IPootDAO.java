package nl.han.gateway.dao;

import nl.han.gateway.models.Poot;

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
}
