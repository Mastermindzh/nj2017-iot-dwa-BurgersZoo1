package nl.han.gateway.controller;

import com.google.gson.Gson;
import nl.han.gateway.service.MyMessageService;
import spark.Request;
import spark.Response;

import java.util.Map;

import static nl.han.gateway.util.transformers.JsonUtil.json;
import static spark.Spark.get;

public class MySensorMessagesController {

    private final MyMessageService mySensorService;
    private Gson gson = new Gson();

    public MySensorMessagesController() {
        this.mySensorService = new MyMessageService();

        get("/messages", this::getAllMySensorMessages, json());
    }

    private Object getAllMySensorMessages(Request request, Response response) {
        response.type("application/json");
        Map<String, String[]> queryMap = request.queryMap().toMap();
        if (queryMap != null) {
            String[] searchParams = queryMap
                    .getOrDefault("search", null);
            int size = 50;
            if (queryMap
                    .getOrDefault("size", null) != null) {
                size = Integer.parseInt(queryMap
                        .get("size")[0]);
            }
            int page = 0;
            if (queryMap
                    .getOrDefault("page", null) != null) {
                page = Integer.parseInt(queryMap
                        .get("page")[0]);
            }
            String order = "DESC";
            if (queryMap
                    .getOrDefault("sort", null) != null) {
                order = queryMap
                        .get("sort")[0];
            }
            return this.mySensorService.getAllMessages(searchParams, page, size, order);
        }
        return this.mySensorService.getAllMessages();
    }

//            '?search=' + encodeURI(filter) +
//            '&page=' + (currentPageIndex - 1) +
//            '&size=' + pageSize +
//            '&sort=' + sortName + ',' + sortOrder)
}
