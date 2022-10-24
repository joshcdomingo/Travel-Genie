package learn.capstone.models;

import java.util.List;

public class Wish {
    private int wishId;
    private City city;
    private List<Entertainment> entertainmentList;

    public Wish(){

    }
    public Wish(int wishId, City city, List<Entertainment> entertainmentList) {
        this.wishId = wishId;
        this.city = city;
        this.entertainmentList = entertainmentList;
    }

    public int getWishId() {
        return wishId;
    }

    public void setWishId(int wishId) {
        this.wishId = wishId;
    }

    public City getCity() {
        return this.city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public List<Entertainment> getEntertainmentList() {
        return entertainmentList;
    }

    public void setEntertainmentList(List<Entertainment> entertainmentList) {
        this.entertainmentList = entertainmentList;
    }

}
