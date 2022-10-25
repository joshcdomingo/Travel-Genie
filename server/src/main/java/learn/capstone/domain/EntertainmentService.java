package learn.capstone.domain;

import learn.capstone.data.EntertainmentFileRepository;
import learn.capstone.models.Entertainment;

import java.util.List;

public class EntertainmentService {
    private final EntertainmentFileRepository repository;

    public EntertainmentService(EntertainmentFileRepository repository) {
        this.repository = repository;
    }

    Entertainment findById(int entertainmentId)  {
        return repository.findById(entertainmentId);
    }

    List<Entertainment> findByCityId(int cityId) {
        return repository.findByCityId(cityId);
    }

    List<Entertainment> findAll()  {
        return repository.findAll();
    }
}
