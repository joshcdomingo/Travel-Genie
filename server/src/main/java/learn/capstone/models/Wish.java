package learn.capstone.models;

import java.util.List;

public class Wish {
    private int wishId;
    private City city;
    private List<Entertainment> entertainmentList;
    private int appUserId;

    public Wish(){

    }

    public Wish(int wishId, City city, List<Entertainment> entertainmentList, int appUserId) {
        this.wishId = wishId;
        this.city = city;
        this.entertainmentList = entertainmentList;
        this.appUserId = appUserId;
    }

    public int getWishId() {
        return wishId;
    }

    public void setWishId(int wishId) {
        this.wishId = wishId;
    }

    public City getCity() {
        return city;
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

    public int getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(int appUserId) {
        this.appUserId = appUserId;
    }
}
