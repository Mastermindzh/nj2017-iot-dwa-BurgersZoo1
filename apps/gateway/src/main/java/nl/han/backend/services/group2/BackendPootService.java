package nl.han.backend.services.group2;

import nl.han.backend.services.BackendPootServiceBase;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MySetMessage;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.io.IOException;

/**
 * Implementation for communicating with group 2 backend
 */
public class BackendPootService extends BackendPootServiceBase {

    public BackendPootService() {
        super("http://" + GatewayProperties.getProperty("backend.group2.ip") +
                ":" + GatewayProperties.getProperty("backend.group2.port"));
    }

    @Override
    public Long getNewPootIdFromBackend() {
        // not yet implemented
        return 0L;
    }


    @Override
    public void sendRangerCardScanToBackend(MySetMessage message, Poot poot) {
        // not yet implemented
    }

    @Override
    public void sendHumidityLoggingToBackend(MySetMessage message, Poot poot) {
        RequestBody body = RequestBody.create(JSON, String.valueOf("{}"));
        Request request = new Request.Builder()
                .url(super.baseUri + "/poten/logs")
                .post(body)
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.code() != 201) {
                logger.error("Error while sending humid to group 2");
            }
        } catch (IOException e) {
            logger.error("Could not connect to backend", e);
        }
    }

    @Override
    public void removePootFromBackend(Poot poot) {
        // not yet implemented
    }


    @Override
    public void sendTemperatureLoggingToBackend(MySetMessage message, Poot poot) {
        RequestBody body = RequestBody.create(JSON, String.valueOf("{\"temperature\": " + message.getPayload() + "}"));
        Request request = new Request.Builder()
                .url(super.baseUri + "/diagnostics/temperature/" + poot.getPootid())
                .post(body)
                .build();
        try (Response response = client.newCall(request).execute()) {
            if (response.code() != 201) {
                logger.error("Error while sending temp to group 2");
            }
        } catch (IOException e) {
            logger.error("Could not connect to backend", e);
        }
    }

    public void sendHeartbeat() {
        DateTime dt = new DateTime();
        DateTimeFormatter dateTimeFormatter = DateTimeFormat.forPattern("y-M-d'T'H:m:s");
        String date = dateTimeFormatter.print(dt);
        String bodyString = "{ \"id\": \"GAT01\", \"connectionStatus\" : \"UP\", " +
                "\"timestamp\": \"" + date + "\" }";
        RequestBody body = RequestBody.create(JSON, bodyString);
        Request request = new Request.Builder()
                .url(this.baseUri + "/alert/gateway")
                .post(body)
                .build();
        try (Response response = client.newCall(request).execute()) {
            logger.debug("Code: " + response.code() + ", body: " + response.body().string());
            if (response.code() == 201 || response.code() == 200) {
                logger.debug("Backend group 2 is OK");
            } else {
                logger.warn("Heartbeat is not saved");
            }

        } catch (IOException e) {
            logger.error("Error while sending heartbeat to group 2");
        }
    }
}