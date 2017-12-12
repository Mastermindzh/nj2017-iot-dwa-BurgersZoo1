package nl.han.gateway.controller;

import com.google.gson.Gson;
import nl.han.gateway.service.MyMessageService;
import nl.han.gateway.service.PotenService;

import static nl.han.gateway.util.transformers.JsonUtil.json;
import static spark.Spark.get;

public class MySensorMessagesController {

    private final MyMessageService mySensorService;
    private Gson gson = new Gson();

    public MySensorMessagesController() {
        this.mySensorService = new MyMessageService();

        get("/messages", (request, response) -> this.mySensorService.getAllMessages(), json());
    }
}
