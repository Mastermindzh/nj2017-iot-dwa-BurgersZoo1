package nl.imacbest.audio;

import nl.imacbest.mysensor.models.MyInternalMessage;
import nl.imacbest.mysensor.models.MyMessage;
import nl.imacbest.mysensor.service.MySensorSendService;
import nl.imacbest.mysensor.service.serial.IStreamSubscriber;

import java.io.*;

public class WavReader implements IStreamSubscriber {
    private MySensorSendService sensorSendService = new MySensorSendService();
    private boolean resentLast = false;

    public static void main(String... args) {
        WavReader reader = new WavReader();
        File wavFile = new File("./../../", "audio.wav");
        reader.readFile(wavFile);
    }

    private boolean sendNext = true;

    public void readFile(File wavFile) {
        if (wavFile.exists()) {
            long totalSize = wavFile.length();


            try (FileInputStream fileInputStream = new FileInputStream(wavFile);
                 OutputStream fileOutputStream = new FileOutputStream(new File("./../../", "audio3.wav"));) {
                BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
                byte buffer[] = new byte[22];
                int totalBytes = 0;

                while (bufferedInputStream.available() > 1) {
                    String x = Integer.toHexString(Byte.toUnsignedInt((byte) bufferedInputStream.read()));
                    for (int i = 0; i < x.length(); i++) {
                        fileOutputStream.write(x.charAt(i));
                    }
//                    sendNext = false;
//                    String x = "";
//                    for (int i = 0; i < 11; i++) {
//                        x += Integer.toHexString(Byte.toUnsignedInt((byte) bufferedInputStream.read()));
//                        totalBytes++;
//                    }
//                    if (x.length() > 22) {
//                        throw new IllegalStateException("Message size too big");
//                    }

                    System.out.println("Currently at: " + totalBytes + " / " + totalSize + ". \t\t" + ((float) totalBytes / totalSize) * 100 + "%");
//
//                    MyMessage last_send = null;
//                    sendNext = false;
//                    MyMessage message = MyMessage.newMyMessage()
//                            .ack(true)
//                            .childSensorId(1)
//                            .command(MyCommand.SET)
//                            .setDataType(MyDataTypes.V_VAR4)
//                            .nodeId(55L)
//                            .payload(x)
//                            .build();
//                    last_send = message;
//                    sensorSendService.sendToNode(message);
//                    while (!sendNext) {
//                        if (resentLast) {
//                            sensorSendService.sendToNode(last_send);
//                            resentLast = false;
//                        }
//                        try {
//                            Thread.sleep(500);
//                        } catch (InterruptedException e) {
//                            e.printStackTrace();
//                        }
//                    }


                }
                System.exit(1);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
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

    @Override
    public void onMessageEvent(MyMessage message) {

        if (message instanceof MyInternalMessage) {
            if ("TSF:MSG:ACK".equals(message.getPayload())) {
                this.sendNext = true;
            } else if (message.getPayload().contains("st=NACK:")) {
                this.resentLast = true;
            } else if (message.getPayload().contains("st=OK:")) {
                this.sendNext = true;
            }
        }
    }

}
