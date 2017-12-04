package nl.han.backend.services;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MySetMessage;
import okhttp3.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.math.BigInteger;

public class BackendPootService {

    private static Logger logger = LoggerFactory.getLogger(BackendPootService.class.getName());
    private static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");


    private OkHttpClient client;
    private String baseUri;
    private String baseUriGroep2;

    public BackendPootService() {
        this.client = new OkHttpClient();
        this.baseUri = "http://" + GatewayProperties.getProperty("backend.group1.ip") +
                ":" + GatewayProperties.getProperty("backend.group1.port")
                + GatewayProperties.getProperty("backend.group1.baseApiUrl");

        this.baseUriGroep2 = "http://" + GatewayProperties.getProperty("backend.group2.ip") +
                ":" + GatewayProperties.getProperty("backend.group2.port")
                + GatewayProperties.getProperty("backend.group2.baseApiUrl");
    }

    /**
     * Try to get a new poot id from the backend
     * Fallback id will be 0L, the poot is then known to the gateway but not registered at the backend
     * todo: fix mocked fallback!
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
                return 1L;
            }
            response.close();
        } catch (IOException e) {
            logger.error("Could not connect with backend", e);
        }
        return 1L; // todo: should not do this
    }

    /**
     * Parse a hex value to a Long
     *
     * @param hexValue
     * @return long dec value of the given HEX
     */
    private Long parseCardIdToDec(String hexValue) {
        hexValue = hexValue.replaceAll("\\s+", "");
        BigInteger result = new BigInteger(hexValue, 16);
        return result.longValueExact();
    }

    /**
     * Send a Poot scan to the backend
     *
     * @param message
     * @param poot
     */
    public void sendRangerCardScanToBackend(MySetMessage message, Poot poot) {
        Long cardId = parseCardIdToDec(message.getPayload());
        RequestBody body = RequestBody.create(JSON, String.valueOf(cardId));
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
            logger.info("Ranger scan: Status code " + response.code() + ", body: " + response.body().string());
            response.close();
        } catch (IOException e) {
            logger.error("Could not connect to backend", e);
        }
    }

    /**
     * Send humidity logging for the other group
     * todo: finish this when api specs are clear
     * https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo2/tree/master/docs/TO/API
     *
     * @param message
     * @param poot
     */
    public void sendHumidityLoggingToBackend(MySetMessage message, Poot poot) {
        RequestBody body = RequestBody.create(JSON, String.valueOf("{}"));
        Request request = new Request.Builder()
                .url(this.baseUriGroep2 + "/poten/logs")
                .post(body)
                .build();
        Response response;
        try {
            response = client.newCall(request).execute();
        } catch (IOException e) {
            logger.error("Could not connect to backend", e);
        }
    }


    /**
     * Send temperature logging for other group
     * todo: finish this when api specs are clear
     * https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo2/tree/master/docs/TO/API
     *
     * @param message
     * @param poot
     */
    public void sendTemperatureLoggingToBackend(MySetMessage message, Poot poot) {
        RequestBody body = RequestBody.create(JSON, String.valueOf("{}"));
        Request request = new Request.Builder()
                .url(this.baseUriGroep2 + "/poten/logs")
                .post(body)
                .build();
        Response response;
        try {
            response = client.newCall(request).execute();
        } catch (IOException e) {
            logger.error("Could not connect to backend", e);
        }
    }
}
