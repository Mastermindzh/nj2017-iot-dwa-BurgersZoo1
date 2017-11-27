package nl.han;

import nl.han.mysensor.service.SerialReader;
import nl.han.gateway.controller.PotenController;
import nl.han.gateway.util.GatewayProperties;

import static spark.Spark.*;
import static spark.debug.DebugScreen.enableDebugScreen;


public class Application {

    public static void main(String[] args) {

        Application application = new Application();

        application.setupSpark();
        application.setupSerial();
        application.registerRoutes();

//        /**
//         * Add header to all responses
//         */
////        after((req, res) -> {
////            if (res.type() == null && res.status() != 404) {
////                res.type("application/json");
////            }
////        });


    }

    /**
     * Register all routes and controllers within the application
     */
    private void registerRoutes() {
        get("/", (req, res) -> "Gateway api");
        post("/test/:poot", (request, response) -> {
            System.out.println(request.params());
            System.out.println(request.body());
            return "";
        });
        new PotenController();
    }

    /**
     * Setup Arduino gateway settings and start listening
     */
    private void setupSerial() {
        if (Boolean.parseBoolean(GatewayProperties.getProperty("arduino.enabled"))) {
            SerialReader main = new SerialReader();
            main.initialize();
        }
    }

    /**
     * Setup Spark settings
     */
    private void setupSpark() {
        int port = 8080; // fallback port
        if (GatewayProperties.getProperty("server.port") == null) {
            port = Integer.parseInt(GatewayProperties.getProperty("server.port"));
        }
        port(port);

        if (GatewayProperties.getProperty("server.debug") == null) {
            boolean debug = Boolean.parseBoolean(GatewayProperties.getProperty("server.debug"));
            if (debug) {
                enableDebugScreen();
            }
        }

    }
}
