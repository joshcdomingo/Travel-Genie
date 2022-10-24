package learn.capstone.data;

import learn.capstone.models.City;
import learn.capstone.models.Entertainment;

import java.util.List;

public interface EntertainmentFileRepository {
    Entertainment findById(int entertainmentId);

    List<Entertainment> findAll();
}
