package learn.capstone.domain;

import learn.capstone.data.WishFileRepository;
import learn.capstone.models.Wish;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishService {
    private final WishFileRepository repository;

    public WishService(WishFileRepository repository) {
        this.repository = repository;
    }

    public Result<Wish> findById(int wishId) {
        Result<Wish> result = new Result<>();

        if (wishId <= 0) {
            result.addMessage("Wish Id cannot be less than or equal to zero", ResultType.INVALID);
            return result;
        }

        Wish wish = repository.findById(wishId);

        if (wish == null) {
            result.addMessage("Wish Id was not found.", ResultType.NOT_FOUND);
            return result;
        }

        result.setPayload(wish);
        return result;
    }

    public Result<Wish> add(Wish wish) {
        Result<Wish> result = validate(wish);
        if (!result.isSuccess()) {
            return result;
        }

        wish = repository.add(wish);
        if (wish.getWishId() == 0) {
            result.addMessage("Wish Id cannot be equal to zero", ResultType.BAD_REQUEST);
            return result;
        }
        result.setPayload(wish);
        return result;
    }

    public Result<Wish> findByAppUserId(int app_userId) {
        Result<Wish> result = new Result<>();

        if (app_userId <= 0) {
            result.addMessage("AppUser Id cannot be less than or equal to zero", ResultType.INVALID);
            return result;
        }

        Wish wish = repository.findByAppUserId(app_userId);

        if (wish == null) {
            result.addMessage("Wish Id was not found.", ResultType.NOT_FOUND);
            return result;
        }

        result.setPayload(wish);
        return result;
    }

    List<Wish> findAll() {
        return repository.findAll();
    }

    boolean deleteById(int wishId) {
        Result<Wish> result = new Result<>();
        if (wishId <= 0) {
            result.addMessage("Wish Id cannot be less than or equal to zero", ResultType.INVALID);
            return result.isSuccess();
        }
        return repository.deleteById(wishId);
    }

    private Result<Wish> validate(Wish wish) {
        Result<Wish> result = new Result<>();
        if (wish == null) {
            result.addMessage("Wish Id was not found.", ResultType.NOT_FOUND);
            return result;
        }

        if (wish.getAppUserId() <= 0) {
            result.addMessage("AppUser Id cannot be less than or equal to zero", ResultType.INVALID);
            return result;
        }

        if (wish.getCityId() <= 0) {
            result.addMessage("City Id cannot be less than or equal to zero", ResultType.NOT_FOUND);
            return result;
        }

        if (wish.getEntertainmentId() <= 0) {
            result.addMessage("Entertainment Id cannot be less than or equal to zero", ResultType.NOT_FOUND);
            return result;
        }

        return result;
    }
}
