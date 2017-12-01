package nl.han.gateway.dao;

import org.bson.types.ObjectId;
import org.mongodb.morphia.EntityInterceptor;
import org.mongodb.morphia.Key;

import java.util.List;

/**
 * Basic CRUD actions
 *
 * @author Thomas
 * @since 0.1
 */
public interface ICrudDAO<T> {

    /**
     * Save a new entity
     *
     * @param entity
     * @return the created entity
     */
    T save(T entity);

    /**
     * Update the given entity
     *
     * @param entity
     * @return updated entity
     */
    T update(T entity);

    /**
     * Find a list of al T objects
     *
     * @return list of T object, may also return null
     */
    List<T> getAll();

    /**
     * Get one by entity
     *
     * @param entity
     * @return
     */
    T get(T entity);

    /**
     * Delete the given entity
     *
     * @param entity
     */
    void delete(T entity);
}
