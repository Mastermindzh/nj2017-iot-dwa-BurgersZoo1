package nl.han;

import nl.han.gateway.controller.MySensorMessagesController;
import nl.han.gateway.controller.PotenController;
import nl.han.gateway.util.GatewayProperties;
import nl.han.gateway.util.CorsFilter;
import nl.han.mysensor.service.serial.SerialCommunication;

import static spark.Spark.*;
import static spark.debug.DebugScreen.enableDebugScreen;


public class Application {
    public static SerialCommunication serialCommunication;


    public static void main(String[] args) {
//
        Application application = new Application();
//
        application.setupSpark();
        application.setupSerial();
        application.registerRoutes();

        CorsFilter.apply();

//        /**
//         * Add header to all responses
//         */
//        after((req, res) -> {
//            if (res.type() == null && res.status() != 404) {
//                res.type("application/json");
//            }
//        });


    }

    /**
     * Register all routes and controllers within the application
     */
    private void registerRoutes() {
        get("/", (req, res) -> "Gateway api");
        new PotenController();
        new MySensorMessagesController();
    }

    /**
     * Setup Arduino gateway settings and start listening
     */
    private void setupSerial() {
        if (Boolean.parseBoolean(GatewayProperties.getProperty("arduino.enabled"))) {
            serialCommunication = new SerialCommunication();
        }
    }

    /**
     * Setup Spark settings
     */
    private void setupSpark() {
        int port = 8080; // fallback port
        if (GatewayProperties.hasProperty("server.port")) {
            port = Integer.parseInt(GatewayProperties.getProperty("server.port"));
        }
        port(port);

        if (GatewayProperties.hasProperty("server.debug")) {
            boolean debug = Boolean.parseBoolean(GatewayProperties.getProperty("server.debug"));
            if (debug) {
                enableDebugScreen();
            }
        }

    }
}
