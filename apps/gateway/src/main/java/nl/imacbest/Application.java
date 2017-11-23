package nl.imacbest;

import nl.imacbest.controller.PotenController;

import static spark.Spark.*;
import static spark.debug.DebugScreen.enableDebugScreen;


public class Application {

    public static void main(String[] args) {
        port(8080);
        enableDebugScreen();
        get("/", (req, res) -> "Gateway api");
        new PotenController();

        after((req, res) -> {
            if(res.type() == null){
                res.type("application/json");
            }
        });

//
//        SerialReader main = new SerialReader();
//        main.initialize();
//        Thread t= new Thread(() -> {
//            //the following line will keep this app alive for 1000 seconds,
//            //waiting for events to occur and responding to them (printing incoming messages to console).
//            try {Thread.sleep(1000000);} catch (InterruptedException ie) {}
//        });
//        t.start();
//        System.out.println("Started");
    }
}
