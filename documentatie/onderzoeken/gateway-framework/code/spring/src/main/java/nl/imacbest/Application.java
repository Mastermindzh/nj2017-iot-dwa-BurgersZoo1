package nl.imacbest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAutoConfiguration
@SpringBootApplication
public class Application implements CommandLineRunner {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        SerialReader main = new SerialReader();
        main.initialize();
        Thread t= new Thread(() -> {
            //the following line will keep this app alive for 1000 seconds,
            //waiting for events to occur and responding to them (printing incoming messages to console).
            try {Thread.sleep(1000000);} catch (InterruptedException ie) {}
        });
        t.start();
        System.out.println("Started");
    }
}
