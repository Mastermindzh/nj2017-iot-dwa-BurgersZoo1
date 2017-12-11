package nl.han.gateway.models;

public abstract class PootAudio {

    private boolean isUploaded;
    private String url;

    public PootAudio(String url) {
        this.url = url;
        this.isUploaded = false;
    }

    public PootAudio() {
    }

    public boolean isUploaded() {
        return isUploaded;
    }

    public void setUploaded(boolean uploaded) {
        this.isUploaded = uploaded;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "PootAudio{" +
                "isUploaded=" + isUploaded +
                ", url='" + url + '\'' +
                '}';
    }
}
