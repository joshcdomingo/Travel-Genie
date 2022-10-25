package learn.capstone.controllers;

import learn.capstone.domain.EntertainmentService;
import learn.capstone.models.Entertainment;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
//@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RequestMapping("/api/travelgenie")
public class EntertainmentController {
    private final EntertainmentService service;

    public EntertainmentController(EntertainmentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Entertainment> findAll() {
        return service.findAll();
    }

    @GetMapping("/{entertainmentId}")
    public Entertainment findById(@PathVariable int entertainmentId) {
        return service.findById(entertainmentId).getPayload();
    }

}
