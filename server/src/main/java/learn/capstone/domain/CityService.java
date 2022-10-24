package learn.capstone.domain;

import learn.capstone.data.CityFileRepository;
import learn.capstone.models.City;

import java.util.List;

public class CityService {

    private final CityFileRepository repository;

    public CityService(CityFileRepository repository) {
        this.repository = repository;
    }

    public List<City> findAll() {
        return repository.findAll();
    }

    public City findById(int cityId) {
        return repository.findById(cityId);
    }

    public City findByEntertainmentId(int entertainmentId) {
        return repository.findById(entertainmentId);
    }

    public City findBySceneryId(int sceneryId) {
        return repository.findById(sceneryId);
    }

}
