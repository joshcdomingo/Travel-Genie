package learn.capstone.data;

import learn.capstone.models.City;

import java.util.List;

public interface CityFileRepository {
    City findById(int cityId);

    List<City> findByScenery(String sceneryName);

    List<City> findAll();
}
