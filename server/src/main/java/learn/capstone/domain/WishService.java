package learn.capstone.domain;

import learn.capstone.data.WishFileRepository;
import learn.capstone.models.Wish;

import java.util.List;

public class WishService {
    private final WishFileRepository repository;

    public WishService(WishFileRepository repository) {
        this.repository = repository;
    }
    Wish findById(int wishId) {
        return repository.findById(wishId);
    }

    Wish add(Wish wish) {
        return repository.add(wish);
    }

    Wish findByAppUserId(int app_userId) {
        return repository.findByAppUserId(app_userId);
    }

    List<Wish> findAll() {
        return repository.findAll();
    }

    boolean deleteById(int agentId) {
        return repository.deleteById(agentId);
    }
}
