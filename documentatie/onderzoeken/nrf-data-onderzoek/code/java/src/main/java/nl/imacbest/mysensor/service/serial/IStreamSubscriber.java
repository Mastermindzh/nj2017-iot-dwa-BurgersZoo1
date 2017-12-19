package nl.imacbest.mysensor.service.serial;

import nl.imacbest.mysensor.models.MyMessage;

/**
 * CLASS DESCRIPTION
 *
 * @author Thomas
 * @since 0.1
 */
public interface IStreamSubscriber {

    void onMessageEvent(MyMessage message);

}
