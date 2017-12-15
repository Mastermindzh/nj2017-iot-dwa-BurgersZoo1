package nl.imacbest.audio;

import nl.imacbest.mysensor.service.MySensorSendService;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class WavReader {

    public static void main(String... args) {
        WavReader reader = new WavReader();
        File wavFile = new File("./../../", "audio.wav");
        reader.readFile(wavFile);
    }

    public void readFile(File wavFile) {
        if (wavFile.exists()) {
            try (FileInputStream fileInputStream = new FileInputStream(wavFile)) {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
                byte buffer[] = new byte[22];
                byte overhead[][] = new byte[2][9];
                int index = 0;
                int j = 0;
                int total = 0;
                while (bufferedInputStream.available() > 1 && total < 16) {
                    byte current = (byte) bufferedInputStream.read();

                    if (index >= 8) {
                        j++;
                        index = 0;
                    }
                    buffer[total] = current;
                    overhead[j][index] = current;
                    index++;
                    total++;
                    current = (byte) Byte.toUnsignedInt(current);


                    System.out.print(this.binaryParser(current));
                    System.out.print("\t|\t");
                    System.out.print(this.binaryParser((byte) (current >> 1)));
                    System.out.print("\t|\t");
                    System.out.print(this.binaryParser((byte) (current << 7)));
                    System.out.print("\t|\t");
                    System.out.println((char) current);
                }
                System.out.println("done");

//                MyMessage message = MyMessage.newMyMessage()
//                        .ack(true)
//                        .childSensorId(1)
//                        .command(MyCommand.SET)
//                        .setDataType(MyDataTypes.V_VAR4)
//                        .nodeId(55L)
//                        .payload(new String(buffer))
//                        .build();
                MySensorSendService sensorSendService = new MySensorSendService();
//                sensorSendService.sendToNode(message);

            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }

    private String binaryParser(byte toParseByte){
        return String.format("%8s", Integer.toBinaryString(toParseByte & 0xFF)).replace(' ', '0');
    }
}
