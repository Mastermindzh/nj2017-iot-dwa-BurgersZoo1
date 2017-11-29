package nl.han.mysensor.service;


import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IDAOFactory;
import nl.han.mysensor.models.MySetMessage;
import nl.han.mysensor.models.myenums.MyDataTypes;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MySensorReceiveServiceTest {

    private MySensorReceiveService mySensorsReceiverService;

    @Before
    public void setup() {
        this.mySensorsReceiverService = new MySensorReceiveService();
    }

    @Test
    @Ignore
    public void testNewNodeSubscribe() {
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_VAR1);
        when(mySetMessage.getPayload()).thenReturn("15");
        when(mySetMessage.getNodeId()).thenReturn(1L);
//        PowerMockito.mockStatic(DAOFactory.class);
        IDAOFactory idaoFactoryMock = mock(IDAOFactory.class);
        when(DAOFactory.getInstance()).thenReturn(idaoFactoryMock);

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);

    }
}