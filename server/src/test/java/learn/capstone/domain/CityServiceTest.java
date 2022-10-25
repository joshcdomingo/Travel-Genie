package learn.capstone.domain;

import learn.capstone.data.CityFileRepository;
import learn.capstone.models.City;
import learn.capstone.models.Scenery;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class CityServiceTest {

    @Autowired
    CityService cityService;

    @MockBean
    CityFileRepository repository;

    @Test
    void shouldNotFindByInvalidCityId() {
        Result<City> actual = cityService.findById(0);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotFindByNoneExistingId() {
        when(repository.findById(100)).thenReturn(null);
        Result<City> actual = cityService.findById(100);
        assertEquals(ResultType.NOT_FOUND, actual.getType());
    }


}