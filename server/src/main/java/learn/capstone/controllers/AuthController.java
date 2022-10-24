package learn.capstone.controllers;

import learn.capstone.models.AppUser;
import learn.capstone.security.JwtConverter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class AuthController {

    private final AuthenticationManager manager;
    private final JwtConverter converter;

    public AuthController(AuthenticationManager manager, JwtConverter converter) {
        this.manager = manager;
        this.converter = converter;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AppUser user) {

        UsernamePasswordAuthenticationToken token
                = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());

        try {
            Authentication authentication = manager.authenticate(token);
            if (authentication.isAuthenticated()) {

                String jwt = converter.userToToken((AppUser) authentication.getPrincipal());

                HashMap<String, String> values = new HashMap<>();
                values.put("jwt", jwt);

                return new ResponseEntity<>(values, HttpStatus.OK);
            }
        } catch (AuthenticationException ex) {
            System.out.println(ex);
        }

        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@AuthenticationPrincipal AppUser user) {
        String jwt = converter.userToToken(user);
        HashMap<String, String> values = new HashMap<>();
        values.put("jwt", jwt);
        return new ResponseEntity<>(values, HttpStatus.OK);
    }
}