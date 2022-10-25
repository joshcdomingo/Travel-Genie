package learn.capstone.controllers;

import learn.capstone.domain.EntertainmentService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
//@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RequestMapping("/api/travelgenie")
public class EntertainmentController {
    private final EntertainmentService service;

    public EntertainmentController(EntertainmentService service) {
        this.service = service;
    }

}
