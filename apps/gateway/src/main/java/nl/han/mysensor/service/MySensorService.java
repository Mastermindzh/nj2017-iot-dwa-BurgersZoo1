package nl.han.mysensor.service;

import nl.han.mysensor.models.MyMessage;
import nl.han.gateway.util.GatewayProperties;
import okhttp3.*;

import java.io.IOException;

/**
 * Handle incomming messages
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorService {

    public static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");
    private final String baseUri;

    OkHttpClient client;

    public MySensorService() {
        this.client = new OkHttpClient();
        this.baseUri = "http://" + GatewayProperties.getProperty("backend.ip") +
                ":" + GatewayProperties.getProperty("backend.port");
    }

    /**
     * Handles incoming MySensors messages that are being received via the serial port
     *
     * @param message mysensor message
     */
    public void handleIncomingMessage(MyMessage message) {
//        try {
//            this.sendPootScan(message);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
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
