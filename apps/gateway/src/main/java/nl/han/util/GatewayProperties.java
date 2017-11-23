package nl.han.util;

import nl.han.Application;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

/**
 * CLASS DESCRIPTION
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
        if(GatewayProperties.properties == null){
            GatewayProperties.loadProperties();
        }
        return GatewayProperties.properties.get(propertyName);
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
