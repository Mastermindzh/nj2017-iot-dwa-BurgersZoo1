package nl.han.spark.dao;

import org.mongodb.morphia.Key;

import java.util.List;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public interface ICrudDAO<T> {

    T save(T entity);

    List<T> getAll();

    T getOne(Key<T> key);
}
