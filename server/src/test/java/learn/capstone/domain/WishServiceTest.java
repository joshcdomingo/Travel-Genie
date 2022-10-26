package learn.capstone.domain;

import learn.capstone.data.WishFileRepository;
import learn.capstone.models.Wish;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.Mockito.when;

@SpringBootTest
public class WishServiceTest {
    @Autowired
    WishService wishService;

    @MockBean
    WishFileRepository repository;

    @Test
    void shouldFindById() {
        Wish expected = new Wish(1, 1, 1, 2);
        when(repository.findById(1)).thenReturn(expected);
        Result<Wish> actual = wishService.findById(1);
        assertEquals(expected.getAppUserId(), actual.getPayload().getAppUserId());
    }

    @Test
    void shouldNotFindByInvalidId() {
        Result<Wish> actual = wishService.findById(0);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotFindByNonExistingId() {
        when(repository.findById(100)).thenReturn(null);
        Result<Wish> actual = wishService.findById(100);
        assertEquals(ResultType.NOT_FOUND, actual.getType());
    }

    @Test
    void shouldAdd() {
        Wish expected = new Wish (4, 4, 4, 4);
        when(repository.add(expected)).thenReturn(expected);
        Result<Wish> actual = wishService.add(expected);
        assertEquals(expected.getAppUserId(), actual.getPayload().getAppUserId());
    }

    @Test
    void shouldNotAddNull() {
        Result<Wish> actual = wishService.add(null);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotAddNonExistingAppUserId() {
        Wish wish = new Wish(0, 0, 1, 1);
        Result<Wish> actual = wishService.add(wish);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotAddNonExistingCityId() {
        Wish wish = new Wish(0, 1, 0, 1);
        Result<Wish> actual = wishService.add(wish);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotAddNonExistingEntertainmentId() {
        Wish wish = new Wish(0, 1, 1, 0);
        Result<Wish> actual = wishService.add(wish);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotDeleteByInvalidId() {
        boolean actual = wishService.deleteById(999);
        assertFalse(actual);
    }

    @Test
    void shouldNotDeleteByNonExistingId() {
        when(repository.deleteById(999)).thenReturn(false);
        boolean actual = wishService.deleteById(999);
        assertFalse(actual);
    }
}
