package nl.han;

import nl.han.controller.PotenController;
import nl.han.util.GatewayProperties;

import static spark.Spark.*;
import static spark.debug.DebugScreen.enableDebugScreen;


public class Application {

    public static void main(String[] args) {

        Application application = new Application();



        application.setupSpark();
        application.setupSerial();

        get("/", (req, res) -> "Gateway api");
        new PotenController();


        /**
         * Add header to all responses
         */
        after((req, res) -> {
            if (res.type() == null) {
                res.type("application/json");
            }
        });


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
        int port = 8080;
        if (GatewayProperties.getProperty("spark.port") == null) {
            port = Integer.parseInt(GatewayProperties.getProperty("spark.port"));
        }
        port(port);

        if (GatewayProperties.getProperty("spark.debug") == null) {
            boolean debug = Boolean.parseBoolean(GatewayProperties.getProperty("spark.debug"));
            if (debug) {
                enableDebugScreen();
            }
        }

    }
}
