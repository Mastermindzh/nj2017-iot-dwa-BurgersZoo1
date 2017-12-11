package nl.imacbest.controller;

import java.util.ArrayList;
import java.util.List;

import static nl.imacbest.transformers.JsonUtil.json;
import static spark.Spark.*;

public class TestController {
    public TestController() {

        get("/users", (request, response) -> {
            // process request
            List<Poot> pooten = new ArrayList<>();
            pooten.add(new Poot("test"));
            return pooten;
        }, json());
        // more routes
    }
}
