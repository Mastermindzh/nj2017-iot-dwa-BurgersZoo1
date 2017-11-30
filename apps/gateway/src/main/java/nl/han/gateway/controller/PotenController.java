package nl.han.gateway.controller;

import com.google.gson.Gson;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.exceptions.NotOnlineException;
import nl.han.gateway.models.AnimalSound;
import nl.han.gateway.models.Poot;
import nl.han.gateway.models.Weetje;
import nl.han.gateway.service.PotenService;
import spark.Request;
import spark.Response;

import java.awt.image.AreaAveragingScaleFilter;
import java.util.ArrayList;
import java.util.List;

import static nl.han.gateway.util.transformers.JsonUtil.json;
import static spark.Spark.get;
import static spark.Spark.put;

public class PotenController {
    private Gson gson = new Gson();
    private PotenService potenService;

    public PotenController() {
        this.potenService = new PotenService();

        put("/poten/:pootid", (this::savePootConfiguration), json());
        get("/poten", (this::getAllPoten), json());
        get("/poten/:pootid", (this::getPoot), json());
        get("/poten/:pootid/config", (this::getPootConfig), json());
    }


    /**
     * Get mocked version of poot config
     *
     * @param request
     * @param response
     * @return
     */
    private Poot getPootConfig(Request request, Response response) {
        Poot poot = new Poot();
        poot.setPootid(1L);
        poot.setNodeId(5L);
        poot.setDierengeluid(new AnimalSound("/dierengeluid.mp3"));

        List<Weetje> weetjes = new ArrayList<>();
        weetjes.add(new Weetje("/weetje1.mp3"));
        weetjes.add(new Weetje("/weetje2.mp3"));
        weetjes.add(new Weetje("/weetje3.mp3"));
        poot.setWeetjes(weetjes);
        return poot;
    }


    /**
     * Get info of one poot
     *
     * @param request
     * @param response
     * @return
     */
    private Poot getPoot(Request request, Response response) {
        Poot poot = this.potenService.getPoot(Integer.parseInt(request.params("pootid")));
        if (poot == null) {
            response.status(404);
        }
        return poot;
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
