package nl.han.backend.services.group2;

public class HearbeatSender implements Runnable {

    private boolean sendHearbeat = true;
    private BackendPootService backendPootService = new BackendPootService();

    @Override
    public void run() {
        while (sendHearbeat) {
            try {
                Thread.sleep(5_000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            backendPootService.sendHeartbeat();
        }
    }

    public void stop() {
        this.sendHearbeat = false;
    }
}
