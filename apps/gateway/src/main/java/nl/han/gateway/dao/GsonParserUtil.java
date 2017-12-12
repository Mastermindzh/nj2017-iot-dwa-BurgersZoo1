package nl.han.gateway.dao;

import com.google.gson.*;
import org.bson.types.ObjectId;

public class GsonParserUtil {
    public static final Gson gson = new GsonBuilder()
            .registerTypeAdapter(
                    ObjectId.class,
                    (JsonDeserializer<ObjectId>) (je, type, jdc) ->
                            new ObjectId(je.getAsJsonObject().get("$oid").getAsString()))
            .registerTypeAdapter(
                    ObjectId.class,
                    (JsonSerializer<ObjectId>) (src, typeOfSrc, context) -> {
                        if (src == null) {
                            return null;
                        } else {
                            JsonObject jo = new JsonObject();
                            jo.addProperty("$oid", src.toString());
                            return jo;
                        }
                    })
            .registerTypeHierarchyAdapter(
                    Object.class,
                    (JsonSerializer<Object>) (src, typeOfSrc, context) -> {
                        Gson gson = new Gson();
                        JsonElement serialize = gson.toJsonTree(src);
                        JsonObject o = (JsonObject) serialize;
                        o.remove("_id");
                        o.addProperty("class", src.getClass().getName());
                        return serialize;
                    }
            )
            .create();
}
