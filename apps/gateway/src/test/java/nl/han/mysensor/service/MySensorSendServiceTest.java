package nl.han.mysensor.service;

import nl.han.Application;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.service.serial.SerialCommunication;
import org.junit.Before;
import org.junit.Test;

import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.*;

public class MySensorSendServiceTest {


    private MySensorSendService mySensorSendService;

    private MySensorParseService parseServiceMock;

    @Before
    public void setup(){
        this.parseServiceMock = mock(MySensorParseService.class);
        this.mySensorSendService = new MySensorSendService(this.parseServiceMock);
        new MySensorSendService();
    }

    @Test
    public void testSendPootIdToNode(){
        Poot poot = mock(Poot.class);
        when(poot.getPootid()).thenReturn(55L);
        when(poot.getNodeid()).thenReturn(66L);
        when(this.parseServiceMock.parseToMySensorMessage(any(MyMessage.class)))
                .thenReturn("testString");

        Application.serialCommunication = mock(SerialCommunication.class);
        this.mySensorSendService.sendPootIdToNode(poot);
        verify(this.parseServiceMock).parseToMySensorMessage(any(MyMessage.class));
        verify(Application.serialCommunication).sendSerial(anyString());
    }
}
