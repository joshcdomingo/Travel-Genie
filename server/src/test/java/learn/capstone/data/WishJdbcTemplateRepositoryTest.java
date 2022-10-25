package learn.capstone.data;

import learn.capstone.models.Wish;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class WishJdbcTemplateRepositoryTest {

    @Autowired
    WishJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Wish> wishes = repository.findAll();
        assertTrue(wishes.size() >=1 );
    }

    @Test
    void shouldFindById() {
        Wish actual = repository.findById(1);
        assertEquals(1, actual.getAppUserId());
    }

    @Test
    void shouldNotFindByNoneExistingId() {
        Wish actual = repository.findById(0);
        assertNull(actual);
    }

    @Test
    void shouldFindByAppUserId() {
        List<Wish> actual = repository.findByAppUserId(1);
        assertEquals(2, actual.get(0).getEntertainmentId());
    }

    @Test
    void shouldNotFindByNoneExistingAppUserId() {
        List<Wish> actual = repository.findByAppUserId(0);
        assertEquals(0, actual.size());
    }

    @Test
    void shouldAdd() {
        Wish expected = new Wish(0, 1, 2, 1);
        expected = repository.add(expected);
        Wish actual = repository.findById(4);
        assertNotNull(actual);
    }

    @Test
    void shouldDeleteById() {
        assertTrue(repository.deleteById(2));
        assertNull(repository.findById(2));
    }

    @Test
    void shouldNotDeleteByNoneExistingId() {
        assertFalse(repository.deleteById(5));
    }
}
