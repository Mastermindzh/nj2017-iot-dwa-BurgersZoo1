package nl.han.gateway.models;

import com.google.gson.annotations.SerializedName;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

import java.util.List;

@Entity
public class Poot {

    @Id
    @SerializedName("_id")
    private ObjectId id;
    private Long pootid;
    private Long nodeid;
    private List<Weetje> weetjes;
    private Dierengeluid dierengeluid;

    public Poot(ObjectId id, Long pootid, Long nodeid, List<Weetje> weetjes, Dierengeluid dierengeluid) {
        this.id = id;
        this.pootid = pootid;
        this.nodeid = nodeid;
        this.weetjes = weetjes;
        this.dierengeluid = dierengeluid;
    }

    public Poot() {
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public Long getPootid() {
        return pootid;
    }

    public void setPootid(Long pootid) {
        this.pootid = pootid;
    }

    public List<Weetje> getWeetjes() {
        return weetjes;
    }

    public void setWeetjes(List<Weetje> weetjes) {
        this.weetjes = weetjes;
    }

    public Dierengeluid getDierengeluid() {
        return dierengeluid;
    }

    public void setDierengeluid(Dierengeluid dierengeluid) {
        this.dierengeluid = dierengeluid;
    }

    public Long getNodeid() {
        return nodeid;
    }

    public void setNodeid(Long nodeid) {
        this.nodeid = nodeid;
    }


    @Override
    public String toString() {
        return "Poot{" +
                "id=" + id +
                ", pootid=" + pootid +
                ", nodeid=" + nodeid +
                ", weetjes=" + weetjes +
                ", dierengeluid=" + dierengeluid +
                '}';
    }
}
