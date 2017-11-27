package nl.han.mysensor.service;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.models.MyPresentationMessage;
import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyPresentationType;
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

/**
 * Handle incomming messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorService {
    private static Logger logger = LoggerFactory.getLogger(MySensorService.class.getName());
    public static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");
    private final String baseUri;

    private OkHttpClient client;
    private IPootDAO pootDAO;

    public MySensorService() {
        this.client = new OkHttpClient();
        this.baseUri = "http://" + GatewayProperties.getProperty("backend.ip") +
                ":" + GatewayProperties.getProperty("backend.port")
                + GatewayProperties.getProperty("backend.baseApiUrl");
        this.pootDAO = DAOFactory.getInstance().getPootDAO();
    }

    /**
     * Handles incoming MySensors messages that are being received via the serial port
     *
     * @param message mysensor message
     */
    public void handleIncomingMessage(MyMessage message) {
        logger.info(String.format("new message: %s", message.toString()));
        if (message.getCommand() == MyCommand.PRESENTATION) {
            if (message instanceof MyPresentationMessage) {
                if (((MyPresentationMessage) message).getPresentationType()
                        != MyPresentationType.S_ARDUINO_REPEATER_NODE) {
                    this.newNodeSubscribe(message);
                }
            }
        }
//        try {
//            this.sendPootScan(message);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
    }

    /**
     * Function that maps the newly online nodes to poot id's.
     * todo: Deze methode werkt nog niet zoals het aanmelden zou moeten werken!
     *
     * @param message
     */
    private void newNodeSubscribe(MyMessage message) {
        logger.info("Registering new node, node id: #" + message.getNodeId());
        Poot poot = this.pootDAO.findByNodeId(message.getNodeId());
        if (poot == null) {
            try {
                logger.info("Unknown poot, register node");
                Poot newPoot = new Poot();
                newPoot.setNodeId(message.getNodeId());
                newPoot.setPootid(this.getNewPootIdFromBackend());
                this.pootDAO.save(newPoot);
            } catch (IOException e) {
                logger.error("Could not create new poot");
            }
        } else {
            poot.setNodeId(message.getNodeId());
        }
    }

    /**
     * Try to get a new poot id from the backend
     *
     * @return poot id
     */
    private Long getNewPootIdFromBackend() throws IOException {
        Request request = new Request.Builder()
                .post(RequestBody.create(null, new byte[]{}))
                .url(this.baseUri + "/poten")
                .build();
        Response response = client.newCall(request).execute();
        if (response.code() == 201) {
            String body = response.body().string();
            JsonObject jsonObject = (new Gson()).fromJson(body, JsonObject.class);
            return jsonObject.get("pootid").getAsLong();
        } else if (response.code() == 500) {
            logger.error("Error while creating new poot");
            throw new IOException("Error while creating new poot");
        }
        throw new IllegalStateException("Error while performing http request");
    }

    /**
     * Send a Poot scan to the backend
     *
     * @param message
     */
    private void sendPootScan(MyMessage message) throws IOException {
        RequestBody body = RequestBody.create(JSON, message.getPayload());

        Request request = new Request.Builder()
                .url(this.baseUri + "/test/" + message.getNodeId())
                .post(body)
                .build();

        Response response = client.newCall(request).execute();
        System.out.println(response.body().string());
    }
}
