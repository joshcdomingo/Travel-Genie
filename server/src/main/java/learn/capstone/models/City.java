package learn.capstone.models;

public class City {
    private int cityId;
    private String countryName;
    private Scenery scenery;
    private Entertainment entertainment;
    private String cityName;

    public City() {
    }

    public City(int cityId, String countryName, Scenery scenery, Entertainment entertainment, String cityName) {
        this.cityId = cityId;
        this.countryName = countryName;
        this.scenery = scenery;
        this.entertainment = entertainment;
        this.cityName = cityName;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public Scenery getScenery() {
        return scenery;
    }

    public void setScenery(Scenery scenery) {
        this.scenery = scenery;
    }

    public Entertainment getEntertainment() {
        return entertainment;
    }

    public void setEntertainment(Entertainment entertainment) {
        this.entertainment = entertainment;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }
}



