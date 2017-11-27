package nl.imacbest;

import nl.imacbest.controller.TestController;

import static spark.Spark.*;


public class Application {

    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");
        new TestController();


        SerialReader main = new SerialReader();
        main.initialize();
        Thread t= new Thread(() -> {
            //the following line will keep this app alive for 1000 seconds,
            //waiting for events to occur and responding to them (printing incoming messages to console).
            try {Thread.sleep(1000000);} catch (InterruptedException ie) {}
        });
        t.start();
        System.out.println("Started");
    }
}
