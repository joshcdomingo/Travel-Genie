package learn.capstone.controllers;

import learn.capstone.domain.CityService;
import learn.capstone.domain.Result;
import learn.capstone.models.City;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
//@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RequestMapping("/api/travelgenie")
public class CityController {

    private final CityService service;

    public CityController(CityService service) {
        this.service = service;
    }

    @GetMapping
    public List<City> findAll() {
        return service.findAll();
    }

//    @GetMapping("/{cityId}")
//    public City findById(@PathVariable int cityId) {
//        return service.findById(cityId);
//    }

}