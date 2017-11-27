package nl.han.gateway.exceptions;

/**
 * Excpetion that can be thrown when a Poot is not online
 *
 * @author Thomas
 * @since 0.1
 */
public class NotOnlineException extends Throwable {

    public NotOnlineException() {
        super();
    }


    public NotOnlineException(String s) {
        super(s);
    }

    public NotOnlineException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotOnlineException(Throwable cause) {
        super(cause);
    }
}
