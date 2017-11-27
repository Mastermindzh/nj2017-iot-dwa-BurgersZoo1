package nl.han.gateway.util;

import nl.han.Application;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

/**
 * Class handles the retrieving of properties from the properties file
 *
 * @author Thomas
 * @since 0.1
 */
public class GatewayProperties {
    private static Map<String, String> properties;

    /**
     * Returns a property from the property file, may return a null value
     *
     * @param propertyName
     * @return property
     */
    public static String getProperty(String propertyName) {
        if (GatewayProperties.properties == null) {
            GatewayProperties.loadProperties();
        }
        return GatewayProperties.properties.get(propertyName);
    }

    /**
     * Checks if a property exists
     *
     * If a property exists, but doesn't have a value, this method will still return true
     *
     * @param propertyName Property name of the property to check
     * @return
     */
    public static boolean hasProperty(String propertyName) {
        if (GatewayProperties.properties == null) {
            GatewayProperties.loadProperties();
        }
        return GatewayProperties.properties.get(propertyName) != null;
    }

    private static void loadProperties() {
        Properties prop = new Properties();
        InputStream input = null;

        try {

            String filename = "gateway.properties";
            input = Application.class.getClassLoader().getResourceAsStream(filename);
            if (input == null) {
                System.out.println("Sorry, unable to find " + filename);
                return;
            }
            prop.load(input);
            GatewayProperties.properties = (Map) prop;

        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
