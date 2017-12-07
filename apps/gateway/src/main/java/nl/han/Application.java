package nl.han;

import nl.han.gateway.controller.PotenController;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.service.serial.SerialCommunication;

import static spark.Spark.*;
import static spark.debug.DebugScreen.enableDebugScreen;


public class Application {
    public static SerialCommunication serialCommunication;

    public static void main(String[] args) throws Exception {
//
        Application application = new Application();
//
        application.setupSpark();
        application.setupSerial();
        application.registerRoutes();

//        new Thread(() -> {
//            while (true) {
//                Application.serialCommunication.sendSerial("55;1;1;1;24;test\n");
//                try {
//                    Thread.sleep(3000);
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//            }
//        }).run();


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
