package learn.capstone.data;

import learn.capstone.models.Entertainment;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
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
}