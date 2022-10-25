package learn.capstone.models;

public class Wish {
    private int wishId;
    private int appUserId;
    private int cityId;
    private int entertainmentId;

    public Wish(){

    }

    public Wish(int wishId,  int appUserId, int cityId, int entertainmentId) {
        this.wishId = wishId;
        this.cityId = cityId;
        this.entertainmentId = entertainmentId;
        this.appUserId = appUserId;
    }

    public int getWishId() {
        return wishId;
    }

    public void setWishId(int wishId) {
        this.wishId = wishId;
    }

    public int getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(int appUserId) {
        this.appUserId = appUserId;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }


    public int getEntertainmentId() {
        return entertainmentId;
    }

    public void setEntertainmentId(int entertainmentId) {
        this.entertainmentId = entertainmentId;
    }
}
