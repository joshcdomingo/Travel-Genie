package learn.capstone.data;

import learn.capstone.models.City;

import java.util.List;

public interface CityFileRepository {
    City findById(int cityId);

    List<City> findAll();
}
