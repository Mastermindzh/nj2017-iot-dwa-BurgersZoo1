package nl.imacbest.controller;

import nl.imacbest.Application;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import spark.Spark;

import static org.junit.Assert.*;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class PotenControllerTest {

    @BeforeClass
    public static void beforeClass(){
        Application.main(null);
    }

    @Test
    public void testSavePootConfigNotFound(){
        // perform some test
    }

    @AfterClass
    public static void afterClass(){
        Spark.stop();
    }

}
