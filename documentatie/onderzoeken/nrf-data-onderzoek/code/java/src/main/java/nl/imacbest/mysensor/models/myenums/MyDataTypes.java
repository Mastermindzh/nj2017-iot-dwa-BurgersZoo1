package nl.imacbest.mysensor.models.myenums;

import nl.imacbest.exceptions.NotFoundException;

/**
 * MySensors type values, more info:
 * https://www.mysensors.org/download/serial_api_20#set,-req
 *
 * @author Thomas
 * @since 0.1
 */
public enum MyDataTypes {
    V_TEMP(0),               // Temperature	S_TEMP, S_HEATER, S_HVAC, S_WATER_QUALITY
    V_HUM(1),                // Humidity	S_HUM
    V_STATUS(2),             // Binary status. 0=off 1=on	S_BINARY, S_DIMMER, S_SPRINKLER, S_HVAC, S_HEATER, S_WATER_QUALITY
    V_PERCENTAGE(3),         // Percentage value. 0-100 (%)	S_DIMMER, S_COVER
    V_PRESSURE(4),           // Atmospheric Pressure	S_BARO
    V_FORECAST(5),           // Whether forecast. One of "stable", "sunny", "cloudy", "unstable", "thunderstorm" or "unknown"	S_BARO
    V_RAIN(6),               // Amount of rain	S_RAIN
    V_RAINRATE(7),           // Rate of rain	S_RAIN
    V_WIND(8),               // Windspeed	S_WIND
    V_GUST(9),               // Gust	S_WIND
    V_DIRECTION(10),         // Wind direction 0-360 (degrees)	S_WIND
    V_UV(11),                // UV light level	S_UV
    V_WEIGHT(12),            // Weight (for scales etc)	S_WEIGHT
    V_DISTANCE(13),          // Distance	S_DISTANCE
    V_IMPEDANCE(14),         // Impedance value	S_MULTIMETER, S_WEIGHT
    V_ARMED(15),             // Armed status of a security sensor. 1=Armed, 0=Bypassed	S_DOOR, S_MOTION, S_SMOKE, S_SPRINKLER, S_WATER_LEAK, S_SOUND, S_VIBRATION, S_MOISTURE
    V_TRIPPED(16),           // Tripped status of a security sensor. 1=Tripped, 0=Untripped	S_DOOR, S_MOTION, S_SMOKE, S_SPRINKLER, S_WATER_LEAK, S_SOUND, S_VIBRATION, S_MOISTURE
    V_WATT(17),              // Watt value for power meters	S_POWER, S_BINARY, S_DIMMER, S_RGB_LIGHT, S_RGBW_LIGHT
    V_KWH(18),               // Accumulated number of KWH for a power meter	S_POWER
    V_SCENE_ON(19),          // Turn on a scene	S_SCENE_CONTROLLER
    V_SCENE_OFF(20),         // Turn of a scene	S_SCENE_CONTROLLER
    V_HVAC_FLOW_STATE(21),   // Mode of header. One of "Off", "HeatOn", "CoolOn", or "AutoChangeOver"	S_HVAC, S_HEATER
    V_HVAC_SPEED(22),        // HVAC/Heater fan speed ("Min", "Normal", "Max", "Auto")	S_HVAC, S_HEATER
    V_LIGHT_LEVEL(23),       // Uncalibrated light level. 0-100%. Use V_LEVEL for light level in lux.	S_LIGHT_LEVEL
    V_VAR1(24),              // Custom value	Any device
    V_VAR2(25),              // Custom value	Any device
    V_VAR3(26),              // Custom value	Any device
    V_VAR4(27),              // Custom value	Any device
    V_VAR5(28),              // Custom value	Any device
    V_UP(29),                // Window covering. Up.	S_COVER
    V_DOWN(30),              // Window covering. Down.	S_COVER
    V_STOP(31),              // Window covering. Stop.	S_COVER
    V_IR_SEND(32),           // Send out an IR-command	S_IR
    V_IR_RECEIVE(33),        // This message contains a received IR-command	S_IR
    V_FLOW(34),              // Flow of water (in meter)	S_WATER
    V_VOLUME(35),            // Water volume	S_WATER
    V_LOCK_STATUS(36),       // Set or get lock status. 1=Locked, 0=Unlocked	S_LOCK
    V_LEVEL(37),             // Used for sending level-value	S_DUST, S_AIR_QUALITY, S_SOUND (dB), S_VIBRATION (hz), S_LIGHT_LEVEL (lux)
    V_VOLTAGE(38),           // Voltage level	S_MULTIMETER
    V_CURRENT(39),           // Current level	S_MULTIMETER
    V_RGB(40),               // RGB value transmitted as ASCII hex string (I.e "ff0000" for red)	S_RGB_LIGHT, S_COLOR_SENSOR
    V_RGBW(41),              // RGBW value transmitted as ASCII hex string (I.e "ff0000ff" for red + full white)	S_RGBW_LIGHT
    V_ID(42),                // Optional unique sensor id (e.g. OneWire DS1820b ids)	S_TEMP
    V_UNIT_PREFIX(43),       // Allows sensors to send in a string representing the unit prefix to be displayed in GUI. This is not parsed by controller! E.g. cm, m, km, inch.	S_DISTANCE, S_DUST, S_AIR_QUALITY
    V_HVAC_SETPOINT_COOL(44),// HVAC cold setpoint	S_HVAC
    V_HVAC_SETPOINT_HEAT(45),// HVAC/Heater setpoint	S_HVAC, S_HEATER
    V_HVAC_FLOW_MODE(46),    // Flow mode for HVAC ("Auto", "ContinuousOn", "PeriodicOn")	S_HVAC
    V_TEXT(47),              // Text message to display on LCD or controller device	S_INFO
    V_CUSTOM(48),            // Custom messages used for controller/inter node specific commands, preferably using S_CUSTOM device type.	S_CUSTOM
    V_POSITION(49),          // GPS position and altitude. Payload: latitude;longitude;altitude(m). E.g. "55.722526;13.017972;18"	S_GPS
    V_IR_RECORD(50),         // Record IR codes S_IR for playback	S_IR
    V_PH(51),                // Water PH	S_WATER_QUALITY
    V_ORP(52),               // Water ORP : redox potential in mV	S_WATER_QUALITY
    V_EC(53),                // Water electric conductivity μS/cm (microSiemens/cm)	S_WATER_QUALITY
    V_VAR(54),               // Reactive power: volt-ampere reactive (var)	S_POWER
    V_VA(55),                // Apparent power: volt-ampere (VA)	S_POWER
    V_POWER_FACTOR(56);      // Ratio of real power to apparent power: floating point value in the range [-1,..,1]	S_POWER

    private final int value;

    MyDataTypes(final int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    /**
     * Search for enum by value
     *
     * @param searchValue
     * @return enum
     * @throws NotFoundException
     */
    public static MyDataTypes getByValue(int searchValue) throws NotFoundException {
        for (MyDataTypes currentEnum : MyDataTypes.values()) {
            if (currentEnum.getValue() == searchValue) {
                return currentEnum;
            }
        }
        throw new NotFoundException("Unkown presentation type");
    }
}
