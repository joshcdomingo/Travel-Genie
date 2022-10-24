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
    void shouldFindAustin() {
        City expected = makeCity();
        when(repository.findById(1)).thenReturn(expected);
        City actual = cityService.findById(1);
        assertEquals(expected, actual);
    }

    City makeCity() {
        City city = new City();
        city.setCityId(1);
        city.setCityName("Austin");
        city.setCountryName("America");
        city.setScenery(Scenery.DESSERT);
        return city;
    }

}