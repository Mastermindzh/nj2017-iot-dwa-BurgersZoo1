package nl.han.backend.services;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MyMessage;
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

public class BackendPootService {

    private static Logger logger = LoggerFactory.getLogger(BackendPootService.class.getName());
    public static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");


    private OkHttpClient client;
    private String baseUri;

    public BackendPootService() {
        this.client = new OkHttpClient();
        this.baseUri = "http://" + GatewayProperties.getProperty("backend.ip") +
                ":" + GatewayProperties.getProperty("backend.port")
                + GatewayProperties.getProperty("backend.baseApiUrl");
    }

    /**
     * Try to get a new poot id from the backend
     *
     * @return poot id
     */
    public Long getNewPootIdFromBackend() throws IOException {
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
            return 0L;
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
