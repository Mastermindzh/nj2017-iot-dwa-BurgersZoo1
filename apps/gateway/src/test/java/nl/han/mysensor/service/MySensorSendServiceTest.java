package nl.han.mysensor.service;

import nl.han.Application;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MyMessage;
import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyDataTypes;
import nl.han.mysensor.service.serial.SerialCommunication;
import org.junit.Before;
import org.junit.Test;
import org.powermock.core.classloader.annotations.PrepareForTest;

import static org.junit.Assert.*;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@PrepareForTest({Application.class})

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

        Application.serialCommunication = mock(SerialCommunication.class);
        this.mySensorSendService.sendPootIdToNode(poot);
        verify(this.parseServiceMock).parseToMySensorMessage(anyObject());
        verify(Application.serialCommunication).sendSerial(anyString());
    }
}