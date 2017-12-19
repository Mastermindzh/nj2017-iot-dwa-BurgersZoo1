package nl.han.backend.services.group2;

import nl.han.backend.services.BackendPootServiceBase;
import nl.han.gateway.models.Poot;
import nl.han.gateway.util.GatewayProperties;
import nl.han.mysensor.models.MySetMessage;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import java.io.IOException;

/**
 * Implementation for communicating with group 2 backend
 */
public class BackendPootService extends BackendPootServiceBase {

    public BackendPootService() {
        super("http://" + GatewayProperties.getProperty("backend.group2.ip") +
                ":" + GatewayProperties.getProperty("backend.group2.port")
                + GatewayProperties.getProperty("backend.group2.baseApiUrl"));
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
        Response response;
        try {
            response = client.newCall(request).execute();
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
        RequestBody body = RequestBody.create(JSON, String.valueOf("{}"));
        Request request = new Request.Builder()
                .url(super.baseUri + "/poten/logs")
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
