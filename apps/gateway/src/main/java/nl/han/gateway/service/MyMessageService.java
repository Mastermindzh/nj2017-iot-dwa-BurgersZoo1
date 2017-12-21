package nl.han.gateway.service;

import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IMyMessagesDAO;
import nl.han.mysensor.models.MyMessage;

import java.util.List;

public class MyMessageService {

    private final IMyMessagesDAO myMessageDAO;

    public MyMessageService() {
        this.myMessageDAO = DAOFactory.getInstance().getMyMessageDAO();
    }

    public List<MyMessage> getAllMessages() {
        return this.myMessageDAO.getAll();
    }

    public MyMessage save(MyMessage message) {
        return this.myMessageDAO.save(message);
    }

    public List<MyMessage> getAllMessages(String[] searchParams, int page, int size, String order) {
        return this.myMessageDAO.getAllFiltered(searchParams, page, size, order);
    }
}
