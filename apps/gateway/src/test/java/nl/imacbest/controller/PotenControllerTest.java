package nl.imacbest.controller;

import nl.han.Application;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import spark.Spark;

/**
 * todo: create tests....
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
