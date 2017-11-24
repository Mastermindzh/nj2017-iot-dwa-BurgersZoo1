package nl.han.spark.controller;

import com.google.gson.Gson;
import nl.han.spark.dao.DAOFactory;
import nl.han.spark.exceptions.NotFoundException;
import nl.han.spark.exceptions.NotOnlineException;
import nl.han.spark.models.Poot;
import nl.han.spark.service.PotenService;
import spark.Request;
import spark.Response;

import java.util.List;

import static nl.han.spark.util.transformers.JsonUtil.json;
import static spark.Spark.get;
import static spark.Spark.put;

public class PotenController {
    private Gson gson = new Gson();
    private PotenService potenService;

    public PotenController() {
        this.potenService = new PotenService();

        put("/poten/:pootid", (this::savePootConfiguration), json());
        get("/poten", (this::getAllPoten), json());
    }


    /**
     * Saves the poot to the PotenService
     *
     * @param request
     * @param response
     * @return transaction id or 200
     */
    private String savePootConfiguration(Request request, Response response) {
        Poot poot = gson.fromJson(request.body(), Poot.class);
        poot.setPootid(Long.valueOf(request.params("pootid")));
        Long transactionID;
        try {
            transactionID = this.potenService.savePootConfig(poot);
            response.type("application/json");
        } catch (NotFoundException ex) {
            response.status(404);
            return ex.getMessage();
        } catch (NotOnlineException e) {
            response.status(503);
            return e.getMessage();
        }
        if (transactionID != null) {
            response.status(202);
            return String.valueOf(transactionID);
        }
        response.status(200);
        return "";

    }

    /**
     * Get a list of all known poten
     * todo: add to Swagger!
     *
     * @param request
     * @param response
     * @return
     */
    private List<Poot> getAllPoten(Request request, Response response) {
        response.type("application/json");
        return this.potenService.getAllPoten();
    }


}
