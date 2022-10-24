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
    void shouldFindByEntertainmentId() {
        City actual = repository.findByEntertainmentId(1);

        assertNotNull(actual);
    }

    @Test
    void shouldFindBySceneryId() {
        City actual = repository.findBySceneryId(1);

        assertNotNull(actual);
    }



}