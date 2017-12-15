package nl.han.gateway.service;

import nl.han.gateway.dao.DAOFactory;
import nl.han.gateway.dao.IDAOFactory;
import nl.han.gateway.dao.IPootDAO;
import nl.han.gateway.exceptions.NotFoundException;
import nl.han.gateway.models.Poot;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import static org.powermock.api.mockito.PowerMockito.mockStatic;

@RunWith(PowerMockRunner.class)
@PrepareForTest({DAOFactory.class})
public class PotenServiceTest {

    @Mock
    private IDAOFactory idaoFactoryMock;
    @Mock
    private IPootDAO iPootDAOmock;
    private PotenService potenService;

    @Before
    public void setup() {
        mockStatic(DAOFactory.class);
        when(DAOFactory.getInstance()).thenReturn(idaoFactoryMock);
        when(idaoFactoryMock.getPootDAO()).thenReturn(iPootDAOmock);
        this.potenService = new PotenService();
    }

    @Test
    public void testSavePootConfig() throws NotFoundException {
        Poot pootMock = mock(Poot.class);
        when(this.iPootDAOmock.update(pootMock)).thenReturn(pootMock);
        this.potenService.savePootConfig(pootMock);
        verify(this.iPootDAOmock).update(pootMock);
    }

    @Test(expected = NotFoundException.class)
    public void testSavePootConfigNotFound() throws NotFoundException {
        Poot pootMock = mock(Poot.class);
        this.potenService.savePootConfig(pootMock);
        verify(this.iPootDAOmock).update(pootMock);
    }

    @Test
    public void testGetAllPoten() {
        List<Poot> potenListMock = new ArrayList<>();
        potenListMock.add(mock(Poot.class));
        potenListMock.add(mock(Poot.class));

        when(this.iPootDAOmock.getAll()).thenReturn(potenListMock);

        assertEquals(potenListMock, this.potenService.getAllPoten());
    }

    @Test
    public void testGetPoot() throws NotFoundException {
        Poot pootMock = mock(Poot.class);
        when(this.iPootDAOmock.findByPootId(5L)).thenReturn(pootMock);
        assertEquals(pootMock, this.potenService.getPoot(5L));
    }

}