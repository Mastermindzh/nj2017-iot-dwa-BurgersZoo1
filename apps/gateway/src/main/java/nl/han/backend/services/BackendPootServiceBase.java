package nl.han.backend.services;

import nl.han.backend.services.group2.BackendPootService;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigInteger;

public class BackendPootServiceBase {

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
}
