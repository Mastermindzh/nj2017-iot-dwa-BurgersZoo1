package nl.han.spark.models;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

import java.util.List;

@Entity
public class Poot {

    @Id
    private ObjectId id;
    private Long pootid;
    private Long nodeId;
    private List<String> weetjes;
    private String dierengeluid;

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

    public void setNodeId(Long nodeId) {
        this.nodeId = nodeId;
    }

    public Long getNodeId() {
        return nodeId;
    }
}
