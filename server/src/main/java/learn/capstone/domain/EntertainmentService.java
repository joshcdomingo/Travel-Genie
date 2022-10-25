package learn.capstone.domain;

import learn.capstone.data.EntertainmentFileRepository;
import learn.capstone.models.Entertainment;

import java.util.List;

public class EntertainmentService {
    private final EntertainmentFileRepository repository;

    public EntertainmentService(EntertainmentFileRepository repository) {
        this.repository = repository;
    }

    public Result<Entertainment> findById(int entertainmentId)  {
        Result<Entertainment> result = new Result<>();

        if (entertainmentId <=0) {
            result.addMessage("Entertainment Id cannot be less or equal to zero.", ResultType.INVALID);
            return result;
        }

        Entertainment entertainment = repository.findById(entertainmentId);

        if (entertainment == null)
        {
            result.addMessage("Entertainment Id was not found.", ResultType.NOT_FOUND);
            return result;
        }

        result.setPayload(entertainment);
        return result;
    }

    public List<Entertainment> findByCityId(int cityId) {
        return repository.findByCityId(cityId);
    }

    List<Entertainment> findAll()  {
        return repository.findAll();
    }
}
