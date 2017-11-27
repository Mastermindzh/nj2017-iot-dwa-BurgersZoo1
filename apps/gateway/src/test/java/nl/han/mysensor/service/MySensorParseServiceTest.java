package nl.han.mysensor.service;

import nl.han.mysensor.models.myenums.MyCommand;
import nl.han.mysensor.models.myenums.MyInternal;
import nl.han.mysensor.models.myenums.MyPresentationType;
import nl.han.mysensor.models.myenums.MyType;
import nl.han.mysensor.models.MyMessage;
import nl.han.gateway.exceptions.NotFoundException;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public class MySensorParseServiceTest {


    private MySensorParseService parseService;

    @Before
    public void setup() {
        this.parseService = new MySensorParseService();
    }

    @Test
    public void testParseVARGMessage() throws NotFoundException {
        MySensorParseService sensorParseService = new MySensorParseService();
        String input = "102;1;1;0;24;Message Pongnode102  -> G\n";
        MyMessage message = sensorParseService.parseMessage(input);
        assertEquals(message.getNodeId(), 102);
        assertEquals(message.getPayload(), "Message Pongnode102  -> G");
        assertEquals(message.getChildSensorId(), 1);
        assertEquals(MyCommand.SET, message.getCommand());
        assertEquals(MyType.V_VAR1, message.getType());
        assertNull(message.getPresentationType());
        assertNull(message.getInternalType());
        assertFalse(message.isAck());
    }

    @Test
    public void testGatewayReadyMessage() throws NotFoundException {
        MySensorParseService sensorParseService = new MySensorParseService();
        String input = "0;255;3;0;14;Gateway startup complete.\n";
        MyMessage message = sensorParseService.parseMessage(input);

        assertEquals(message.getNodeId(), 0);
        assertEquals(message.getPayload(), "Gateway startup complete.");
        assertEquals(message.getChildSensorId(), 255);
        assertEquals(MyCommand.INTERNAL, message.getCommand());
        assertNull(message.getType());
        assertNull(message.getPresentationType());
        assertEquals(MyInternal.I_GATEWAY_READY, message.getInternalType());
        assertFalse(message.isAck());
    }

    @Test
    public void testArduinoRepeaterNode() throws NotFoundException {

        MySensorParseService sensorParseService = new MySensorParseService();
        String input = "0;255;0;0;18;2.1.1\n";
        MyMessage message = sensorParseService.parseMessage(input);

        assertEquals(message.getNodeId(), 0);
        assertEquals(message.getPayload(), "2.1.1");
        assertEquals(message.getChildSensorId(), 255);
        assertEquals(MyCommand.PRESENTATION, message.getCommand());
        assertNull(message.getType());
        assertNull(message.getInternalType());
        assertEquals(MyPresentationType.S_ARDUINO_REPEATER_NODE, message.getPresentationType());
        assertFalse(message.isAck());
    }
}
