package learn.capstone.data;

import learn.capstone.models.Wish;

import java.util.List;

public interface WishFileRepository {
    Wish findById(int wishId);

    List<Wish> findAll();
}
