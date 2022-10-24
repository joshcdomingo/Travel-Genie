package learn.capstone.data;

import learn.capstone.models.Wish;

import java.util.List;

public interface WishFileRepository {
    Wish findById(int wishId);

    Wish add(Wish wish);

    List<Wish> findAll();

    boolean deleteById(int agentId);
}
