package nl.han.gateway.models;

import org.bson.types.ObjectId;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class PootTest {

    @Test
    public void testObjectId() {
        Poot poot = new Poot();
        assertNull(poot.getId());
        poot.setId(new ObjectId("5a1d81c051ab0473a2677df2"));
        assertEquals(new ObjectId("5a1d81c051ab0473a2677df2"), poot.getId());
    }

    @Test
    public void testNodeId() {
        Poot poot = new Poot();
        assertNull(poot.getNodeid());
        poot.setNodeid(5L);
        assertEquals(new Long(5L), poot.getNodeid());
    }

    @Test
    public void testPootId() {
        Poot poot = new Poot();
        assertNull(poot.getPootid());
        poot.setPootid(25L);
        assertEquals(new Long(25L), poot.getPootid());
    }

    @Test
    public void testWeetjes() {
        Poot poot = new Poot();
        assertNull(poot.getWeetjes());
        List<Weetje> weetjesList = new ArrayList<>();
        weetjesList.add(new Weetje("/someurl1"));
        weetjesList.add(new Weetje("/someurl2"));
        poot.setWeetjes(weetjesList);
        assertEquals(weetjesList, poot.getWeetjes());
    }

    @Test
    public void testDierenGeluid(){
        Poot poot = new Poot();
        assertNull(poot.getDierengeluid());
        Dierengeluid dierengeluid = new Dierengeluid("/url");
        poot.setDierengeluid(dierengeluid);
        assertEquals(dierengeluid, poot.getDierengeluid());
    }

}