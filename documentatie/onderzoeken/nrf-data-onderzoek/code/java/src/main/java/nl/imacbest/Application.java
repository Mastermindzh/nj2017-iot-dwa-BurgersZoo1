package nl.imacbest;

import nl.imacbest.audio.WavReader;
import nl.imacbest.mysensor.service.serial.SerialCommunication;

import java.io.File;

public class Application {

    public static SerialCommunication serialCommunication;

    public static void main(String... args) {
        serialCommunication = new SerialCommunication();

        new Thread(() -> {
            while(true){
                try {
                    Thread.sleep(10000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                WavReader reader = new WavReader();
                File wavFile = new File("./../../", "audio.wav");
                reader.readFile(wavFile);
            }
        }).start();
    }
}
