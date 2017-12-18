package nl.han.gateway.controller;

import com.google.gson.Gson;
import nl.han.gateway.service.MyMessageService;

import static nl.han.gateway.util.transformers.JsonUtil.json;
import static spark.Spark.get;

public class MySensorMessagesController {

    private final MyMessageService mySensorService;
    private Gson gson = new Gson();

    public MySensorMessagesController() {
        this.mySensorService = new MyMessageService();

        get("/messages", (request, response) -> {
            response.type("application/json");
            if (request.queryMap().toMap() != null) {
                request.queryMap().toMap().forEach((key, val) -> {
                    for (int i = 0; i < val.length; i++) {
                        System.out.println(key + ": " + val[i]);
                    }
                });
                String[] searchParams = request.queryMap()
                        .toMap()
                        .getOrDefault("search", null);
                int size = 50;
                if (request.queryMap()
                        .toMap()
                        .getOrDefault("size", null) != null) {
                    size = Integer.parseInt(request.queryMap()
                            .toMap()
                            .get("size")[0]);
                }
                int page = 0;
                if (request.queryMap()
                        .toMap()
                        .getOrDefault("page", null) != null) {
                    page = Integer.parseInt(request.queryMap()
                            .toMap()
                            .get("page")[0]);
                }
                String order = "DESC";
                if (request.queryMap()
                        .toMap()
                        .getOrDefault("sort", null) == null) {
                    order = request.queryMap()
                            .toMap()
                            .get("sort")[0];
                }


                return this.mySensorService.getAllMessages(searchParams, page, size, order);
            }
            return this.mySensorService.getAllMessages();

        }, json());
    }

//            '?search=' + encodeURI(filter) +
//            '&page=' + (currentPageIndex - 1) +
//            '&size=' + pageSize +
//            '&sort=' + sortName + ',' + sortOrder)
}
