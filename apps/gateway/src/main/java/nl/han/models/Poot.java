package nl.han.models;

import java.util.List;

public class Poot {

    private Long pootid;
    private List<String> weetjes;
    private String dierengeluid;

    public Long getPootid() {
        return pootid;
    }

    public void setPootid(Long pootid) {
        this.pootid = pootid;
    }

    public List<String> getWeetjes() {
        return weetjes;
    }

    public void setWeetjes(List<String> weetjes) {
        this.weetjes = weetjes;
    }

    public String getDierengeluid() {
        return dierengeluid;
    }

    public void setDierengeluid(String dierengeluid) {
        this.dierengeluid = dierengeluid;
    }

    @Override
    public String toString() {
        return "Poot{" +
                "pootid=" + pootid +
                ", weetjes=" + weetjes +
                ", dierengeluid='" + dierengeluid + '\'' +
                '}';
    }
}
