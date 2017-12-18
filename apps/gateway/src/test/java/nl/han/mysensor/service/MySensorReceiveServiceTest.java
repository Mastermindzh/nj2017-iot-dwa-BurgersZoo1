package nl.han.mysensor.service;


import nl.han.backend.services.BackendPootServiceBase;
import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IDAOFactory;
import nl.han.gateway.dao.IMyMessagesDAO;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.exceptions.NotImplementedException;
import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MySetMessage;
import nl.han.mysensor.models.myenums.MyDataTypes;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.*;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@RunWith(PowerMockRunner.class)
@PrepareForTest({DAOFactory.class})
public class MySensorReceiveServiceTest {

    @Mock
    private MySensorReceiveService mySensorsReceiverService;
    @Mock
    private IDAOFactory idaoFactoryMock;
    @Mock
    private IPootDAO iPootDAOmock;
    @Mock
    private IMyMessagesDAO iMyMessagesDAOmock;
    @Mock
    private MySensorSendService sendService;
    @Mock
    private BackendPootServiceBase backendPootServiceMock;

    @Before
    public void setup() {
        mockStatic(DAOFactory.class);
        when(DAOFactory.getInstance()).thenReturn(idaoFactoryMock);
        when(idaoFactoryMock.getMyMessageDAO()).thenReturn(iMyMessagesDAOmock);
        when(idaoFactoryMock.getPootDAO()).thenReturn(iPootDAOmock);

        List<BackendPootServiceBase> backendPootServiceBaseList = new ArrayList<>();
        backendPootServiceBaseList.add(this.backendPootServiceMock);

        this.mySensorsReceiverService = new MySensorReceiveService(
                backendPootServiceBaseList.get(0),
                backendPootServiceBaseList,
                this.sendService);
    }

    @Test
    public void testNewNodeSubscribeWithKnownPoot() throws NotFoundException {
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_VAR1);
        when(mySetMessage.getPayload()).thenReturn("15");
        when(mySetMessage.getNodeId()).thenReturn(1L);
        Poot pootMock = mock(Poot.class);

        when(this.iPootDAOmock.findByPootId(anyLong())).thenReturn(pootMock);

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);
        verify(this.iPootDAOmock).update(anyObject());
        verify(this.sendService).sendPootIdToNode(anyObject());
    }

    @Test
    public void testNewNodeSubscribeWithUnKnownPoot() throws NotFoundException {
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_VAR1);
        when(mySetMessage.getPayload()).thenReturn("255");
        when(mySetMessage.getNodeId()).thenReturn(1L);

        when(this.backendPootServiceMock.getNewPootIdFromBackend()).thenReturn(5L);
        when(this.iPootDAOmock.findByPootId(anyLong())).thenThrow(NotFoundException.class);
        when(this.iPootDAOmock.save(any(Poot.class))).thenReturn(mock(Poot.class));

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);
        verify(this.iPootDAOmock).save(any(Poot.class));
        verify(this.backendPootServiceMock).getNewPootIdFromBackend();
        verify(this.sendService).sendPootIdToNode(any(Poot.class));
    }

    @Test
    public void testRangerPasScan() {
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_VAR2);
        when(mySetMessage.getPayload()).thenReturn("25 EF 24 A1");
        when(mySetMessage.getNodeId()).thenReturn(1L);

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);
        verify(this.backendPootServiceMock)
                .sendRangerCardScanToBackend(eq(mySetMessage), anyObject());
        verify(this.iPootDAOmock).findByNodeId(eq(mySetMessage.getNodeId()));
    }

    @Test
    public void testSendTemperatureValue(){
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_TEMP);
        when(mySetMessage.getPayload()).thenReturn("25");
        when(mySetMessage.getNodeId()).thenReturn(1L);

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);
        verify(this.backendPootServiceMock)
                .sendTemperatureLoggingToBackend(eq(mySetMessage), anyObject());
        verify(this.iPootDAOmock).findByNodeId(eq(mySetMessage.getNodeId()));
    }

    @Test
    public void testSendHumidityValue(){
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_HUM);
        when(mySetMessage.getPayload()).thenReturn("35");
        when(mySetMessage.getNodeId()).thenReturn(1L);

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);
        verify(this.backendPootServiceMock)
                .sendHumidityLoggingToBackend(eq(mySetMessage), anyObject());
        verify(this.iPootDAOmock).findByNodeId(eq(mySetMessage.getNodeId()));
    }

    @Test(expected = NotImplementedException.class)
    public void testNotImplementedMessage(){
        MySetMessage mySetMessage = mock(MySetMessage.class);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_ARMED);
        when(mySetMessage.getPayload()).thenReturn("35");
        when(mySetMessage.getNodeId()).thenReturn(1L);
        when(mySetMessage.getType()).thenReturn(MyDataTypes.V_ARMED);

        this.mySensorsReceiverService.handleIncomingMessage(mySetMessage);
    }


}