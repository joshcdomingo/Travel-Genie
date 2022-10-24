package learn.capstone.domain;

import learn.capstone.data.CityFileRepository;
import learn.capstone.models.City;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
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


}
