package learn.capstone.controllers;

import learn.capstone.domain.Result;
import learn.capstone.domain.WishService;
import learn.capstone.models.Wish;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
//@CrossOrigin(origins = {"http://127.0.0.1:5500"})
@RequestMapping("/api/travelgenie")
public class WishController {
    private final WishService service;

    public WishController(WishService service) {
        this.service = service;
    }

    @GetMapping
    public List<Wish> findAll() {
        return service.findAll();
    }

    @GetMapping("/{wishId}")
    public Wish findById(@PathVariable int wishId) {
        return service.findById(wishId).getPayload();
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Wish wish) {
        Result<Wish> result = service.add(wish);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{wishId}")
    public ResponseEntity<Void> deleteById(@PathVariable int wishId) {
        if (service.deleteById(wishId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
