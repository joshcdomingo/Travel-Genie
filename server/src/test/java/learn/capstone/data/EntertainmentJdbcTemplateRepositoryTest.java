package learn.capstone.data;

import learn.capstone.models.Entertainment;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class EntertainmentJdbcTemplateRepositoryTest {

    @Autowired
    EntertainmentJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Entertainment> entertainment = repository.findAll();
        assertNotNull(entertainment);

        assertTrue(entertainment.size() >= 1 && entertainment.size() <= 6);
    }

    @Test
    void shouldFindById() {
        Entertainment actual = repository.findById(1);

        assertNotNull(actual);
    }

    @Test
    void shouldNotFindByNoneExistingId() {
        Entertainment actual = repository.findById(0);

        assertNull(actual);
    }

    @Test
    void shouldFindByCityId() {
        List<Entertainment> actual = repository.findByCityId(1);
        assertEquals(1, actual.size());
    }

    @Test
    void shouldNotFindByNoneExitingCityId() {
        List<Entertainment> actual = repository.findByCityId(0);
        assertEquals(0, actual.size());
    }
}