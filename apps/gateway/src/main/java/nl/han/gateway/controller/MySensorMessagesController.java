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
            System.out.println(request.queryMap().toMap());
            if (request.queryMap().toMap() != null) {
                request.queryMap().toMap().forEach((key, val) -> {
                    System.out.println(key + ": " + val[0]);
                });
            }
            return this.mySensorService.getAllMessages();

        }, json());
    }

//            '?search=' + encodeURI(filter) +
//            '&page=' + (currentPageIndex - 1) +
//            '&size=' + pageSize +
//            '&sort=' + sortName + ',' + sortOrder)
}
