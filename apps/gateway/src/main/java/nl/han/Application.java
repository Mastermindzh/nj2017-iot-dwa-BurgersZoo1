package nl.han;

import nl.han.backend.services.group2.HearbeatSender;
import nl.han.gateway.controller.MySensorMessagesController;
import nl.han.gateway.controller.PotenController;
import nl.han.gateway.util.CorsFilter;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.service.serial.SerialCommunication;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.debug.DebugScreen.enableDebugScreen;


public class Application {
    public static SerialCommunication serialCommunication;


    public static void main(String[] args) {

        Application application = new Application();

        application.setupSpark();
        application.setupSerial();
        application.registerRoutes();

        CorsFilter.apply();

        application.setupHeartbeat();
    }


    private void setupHeartbeat() {
        if (GatewayProperties.hasProperty("backend.group2.heartbeat")) {
            if (Boolean.valueOf(GatewayProperties.getProperty("backend.group2.heartbeat"))) {
                (new Thread(new HearbeatSender())).run();
            }
        }
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
