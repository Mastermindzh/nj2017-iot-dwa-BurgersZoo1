package nl.han.gateway.util.transformers;

import com.google.gson.Gson;
import spark.ResponseTransformer;

/**
 * Class is used when a HTTP endpoint needs to return JSON format.
 * This will parse object so JSON.
 */
public class JsonUtil {
    public static String toJson(Object object) {
        return new Gson().toJson(object);
    }

    public static ResponseTransformer json() {
        return JsonUtil::toJson;
    }
}
