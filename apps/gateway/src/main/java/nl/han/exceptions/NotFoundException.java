package nl.han.exceptions;

/**
 * Exception can be thrown when an object cannot be found
 *
 * @author Thomas
 * @since 0.1
 */
public class NotFoundException extends Throwable{

    public NotFoundException() {
        super();
    }


    public NotFoundException(String s) {
        super(s);
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public NotFoundException(Throwable cause) {
        super(cause);
    }

}
