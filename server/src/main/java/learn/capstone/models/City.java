package learn.capstone.models;

public class City {
    int cityId;
    int countryId;
    int sceneryId;
    String cityName;

    public City() {
    }

    public City(int cityId, int countryId, int sceneryId, String cityName) {
        this.cityId = cityId;
        this.countryId = countryId;
        this.sceneryId = sceneryId;
        this.cityName = cityName;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public int getCountryId() {
        return countryId;
    }

    public void setCountryId(int countryId) {
        this.countryId = countryId;
    }

    public int getSceneryId() {
        return sceneryId;
    }

    public void setSceneryId(int sceneryId) {
        this.sceneryId = sceneryId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}
