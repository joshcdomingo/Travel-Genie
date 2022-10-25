package learn.capstone.data;

import learn.capstone.models.City;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class CityJdbcTemplateRepositoryTest {

    @Autowired
    CityJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<City> cities = repository.findAll();
        assertNotNull(cities);

        assertTrue(cities.size() >= 1 && cities.size() <= 6);
    }

    @Test
    void shouldFindById() {
        City actual = repository.findById(1);

        assertNotNull(actual);
    }

    @Test
    void shouldNotFindByNoneExistingId() {
        City actual = repository.findById(0);

        assertNull(actual);
    }

    @Test
    void shouldFindByScenery() {
        List<City> actual = repository.findByScenery("BEACH");

        assertEquals(1, actual.size());
    }

    @Test
    void shouldNotFindByNoneExistingScenery() {
        List<City> actual = repository.findByScenery("Test");

        assertEquals(0, actual.size());
    }
}