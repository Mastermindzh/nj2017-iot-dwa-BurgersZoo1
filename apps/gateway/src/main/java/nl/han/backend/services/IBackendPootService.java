package nl.han.backend.services;

import nl.han.gateway.models.Poot;
import nl.han.mysensor.models.MySetMessage;

public interface IBackendPootService {


    /**
     * Send a Poot scan to the backend
     *
     * @param message
     * @param poot
     */
    void sendRangerCardScanToBackend(MySetMessage message, Poot poot);

    /**
     * Try to get a new poot id from the backend
     * Fallback id will be 0L, the poot is then known to the gateway but not registered at the backend
     *
     * @return poot id
     */
    Long getNewPootIdFromBackend();

    /**
     * Send temperature logging for other group
     * todo: finish this when api specs are clear
     * https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo2/tree/master/docs/TO/API
     *
     * @param message
     * @param poot
     */
    void sendTemperatureLoggingToBackend(MySetMessage message, Poot poot);

    /**
     * Send humidity logging for the other group
     * todo: finish this when api specs are clear
     * https://github.com/HANICA-MinorMulti/nj2017-iot-dwa-BurgersZoo2/tree/master/docs/TO/API
     *
     * @param message
     * @param poot
     */
    void sendHumidityLoggingToBackend(MySetMessage message, Poot poot);
}
