package nl.han.backend.services;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.models.MySetMessage;
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

public class BackendPootService {

    private static Logger logger = LoggerFactory.getLogger(BackendPootService.class.getName());
    private static final MediaType JSON
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
     * Fallback id will be 0L, the poot is then known to the gateway but not registered at the backend
     *
     * @return poot id
     */
    public Long getNewPootIdFromBackend() {
        Request request = new Request.Builder()
                .post(RequestBody.create(null, new byte[]{}))
                .url(this.baseUri + "/poten/new")
                .build();
        try {
            Response response = client.newCall(request).execute();

            if (response.code() == 201) {
                String body = response.body().string();
                JsonObject jsonObject = (new Gson()).fromJson(body, JsonObject.class);
                return jsonObject.get("pootid").getAsLong();
            } else if (response.code() == 500) {
                logger.error("Error while creating new poot");
                return 0L;
            }
            response.close();
        } catch (IOException e) {
            logger.error("Could not connect with backend", e);
        }
        return 0L; // todo: should not do this
    }


    /**
     * Send a Poot scan to the backend
     *
     * @param message
     * @param poot
     */
    public void sendRangerCardScanToBackend(MySetMessage message, Poot poot) {
        RequestBody body = RequestBody.create(JSON, "{pasid:" + message.getPayload() + "}");
        Request request = new Request.Builder()
                .url(this.baseUri + "/poten/" + poot.getPootid() + "/scan")
                .post(body)
                .build();
        Response response;
        try {
            response = client.newCall(request).execute();
            if (response.code() == 201) {
                logger.debug("Poot scan was successfully registered at the backend");
            } else if (response.code() == 400) {
                logger.error("Ranger doesn't exist");
            } else if (response.code() == 404) {
                logger.error("Could not find poot");
            } else if (response.code() == 500) {
                logger.error("Ranger scan is not saved!");
            } else {
                logger.error("Unknown error with the backend");
            }
            response.close();
        } catch (IOException e) {
            logger.error("Could not connect to backend", e);
        }
    }
}
