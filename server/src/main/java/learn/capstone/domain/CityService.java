package learn.capstone.domain;

import learn.capstone.data.CityFileRepository;
import learn.capstone.models.City;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    private final CityFileRepository repository;

    public CityService(CityFileRepository repository) {
        this.repository = repository;
    }

    public List<City> findAll() {
        return repository.findAll();
    }

    public Result<City> findById(int cityId) {
        Result<City> result = new Result<>();

        if(cityId <= 0){
            result.addMessage("city id cannot be a 0 or negative", ResultType.INVALID);
            return result;
        }

        City city = repository.findById(cityId);

        if(city == null){
            result.addMessage("city cannot be null", ResultType.NOT_FOUND);
            return result;
        }

        result.setPayload(city);
        return result;
    }

    public List<City> findByScenery(String sceneryName) {
        return repository.findByScenery(sceneryName);
    }
}
