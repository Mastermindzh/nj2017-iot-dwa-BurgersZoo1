package nl.imacbest.audio;

import nl.imacbest.mysensor.models.MyMessage;
import nl.imacbest.mysensor.models.myenums.MyCommand;
import nl.imacbest.mysensor.models.myenums.MyDataTypes;
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
            long totalSize = wavFile.length();
            try (FileInputStream fileInputStream = new FileInputStream(wavFile)) {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
                byte buffer[] = new byte[22];
                byte overhead[][] = resetAllBytes(new byte[2][8]);
                int index = 0;
                int j = 0;
                int totalBytes = 0;

                while (bufferedInputStream.available() > 1) {
                    String x = "";
                    for (int i = 0; i < 14; i++) {
                        x += Integer.toHexString(Byte.toUnsignedInt((byte) bufferedInputStream.read()));
                        totalBytes++;
                    }
                    MyMessage message = MyMessage.newMyMessage()
                            .ack(true)
                            .childSensorId(1)
                            .command(MyCommand.SET)
                            .setDataType(MyDataTypes.V_VAR4)
                            .nodeId(55L)
                            .payload(x)
                            .build();
                    MySensorSendService sensorSendService = new MySensorSendService();
                    System.out.println("Currently at: " +totalBytes + " / " + totalSize+ ". \t\t" + ((float)totalBytes/totalSize) *100 + "%");
                    sensorSendService.sendToNode(message);
                    Thread.sleep(1000);

//                    if (index >= 7) {
//                        j++;
//                        index = 0;
//                    }
//                    buffer[total] = current;
//                    overhead[j][index] = current;
//                    index++;

                }
//                for(int i = 0;i < 2; i++){
//                    for (int k = 0; k < 8; k++) {
//                        byte current = overhead[i][k];
//                        String currentString = Byte.toString(current);
//                        if ("0".equals(currentString)) {
//                            overhead[i][8] ^= (0x01 << i);
//                            overhead[i][k] = (byte) 0xff;
//                        }
//                    }
//                }

//                String hexString = String.format("%020x", new BigInteger(1, new String(overhead[0]).getBytes()));
//                System.out.println("done");

//                MyMessage message = MyMessage.newMyMessage()
//                        .ack(true)
//                        .childSensorId(1)
//                        .command(MyCommand.SET)
//                        .setDataType(MyDataTypes.V_VAR4)
//                        .nodeId(55L)
//                        .payload(x)
//                        .build();
//                MySensorSendService sensorSendService = new MySensorSendService();
//                sensorSendService.sendToNode(message);

            } catch (IOException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
        System.exit(1);
    }

    public static String toBinary(int a, int bits) {
        if (--bits > 0)
            return toBinary(a >> 1, bits) + ((a & 0x1) == 0 ? "0" : "1");
        else
            return (a & 0x1) == 0 ? "0" : "1";
    }

    /**
     * Resets all bytes to 0x00
     *
     * @param bytes
     * @return
     */
    private byte[][] resetAllBytes(byte[][] bytes) {
        for (int i = 0; i < bytes.length; i++) {
            for (int j = 0; j < bytes[i].length; j++) {
                bytes[i][j] = (byte) 0xFF;
            }
        }
        return bytes;
    }

    private String binaryParser(byte toParseByte) {
        return String.format("%8s", Integer.toBinaryString(toParseByte & 0xFF)).replace(' ', '0');
    }
}
