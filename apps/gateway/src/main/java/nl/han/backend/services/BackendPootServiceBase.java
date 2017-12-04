package nl.han.backend.services;

import nl.han.backend.services.group2.BackendPootService;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MySetMessage;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigInteger;

public abstract class BackendPootServiceBase {

    protected static Logger logger = LoggerFactory.getLogger(BackendPootService.class.getName());
    protected static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");


    protected OkHttpClient client;
    protected String baseUri;

    public BackendPootServiceBase(String baseUri) {
        this.client = new OkHttpClient();
        this.baseUri = baseUri;
    }

    /**
     * Parse a hex value to a Long
     *
     * @param hexValue
     * @return long dec value of the given HEX
     */
    protected Long parseCardIdToDec(String hexValue) {
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
    public abstract void sendRangerCardScanToBackend(MySetMessage message, Poot poot);

    /**
     * Try to get a new poot id from the backend
     * Fallback id will be 0L, the poot is then known to the gateway but not registered at the backend
     *
     * @return poot id
     */
    public abstract Long getNewPootIdFromBackend();

    /**
     * Send temperature logging for other group
     * todo: finish this when api specs are clear
     * https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo2/tree/master/docs/TO/API
     *
     * @param message
     * @param poot
     */
    public abstract void sendTemperatureLoggingToBackend(MySetMessage message, Poot poot);

    /**
     * Send humidity logging for the other group
     * todo: finish this when api specs are clear
     * https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo2/tree/master/docs/TO/API
     *
     * @param message
     * @param poot
     */
    public abstract void sendHumidityLoggingToBackend(MySetMessage message, Poot poot);
}
