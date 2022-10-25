package learn.capstone.domain;

import learn.capstone.data.EntertainmentFileRepository;
import learn.capstone.models.Entertainment;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
class EntertainmentServiceTest {

    @Autowired
    EntertainmentService entertainmentService;

    @MockBean
    EntertainmentFileRepository repository;

    @Test
    void shouldNotFindByInvalidId() {
        Result<Entertainment> actual = entertainmentService.findById(0);
        assertEquals(ResultType.INVALID, actual.getType());
    }

    @Test
    void shouldNotFindByNoneExistingId() {
        when(repository.findById(100)).thenReturn(null);
        Result<Entertainment> actual = entertainmentService.findById(100);
        assertEquals(ResultType.NOT_FOUND, actual.getType());
    }
}
