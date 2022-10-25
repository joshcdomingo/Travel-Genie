package learn.capstone.controllers;
<<<<<<< HEAD
import learn.capstone.domain.Result;
import learn.capstone.models.AppUser;
import learn.capstone.security.AppUserService;
=======

import learn.capstone.models.AppUser;
>>>>>>> 7b9fe75cab33e9a5787702ea2b512c2409f48a2f
import learn.capstone.security.JwtConverter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
<<<<<<< HEAD
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
=======
>>>>>>> 7b9fe75cab33e9a5787702ea2b512c2409f48a2f
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class AuthController {

<<<<<<< HEAD

    private final AuthenticationManager manager;
    private final JwtConverter converter;
    private final PasswordEncoder encoder;

    public AuthController(AuthenticationManager manager, JwtConverter converter, PasswordEncoder encoder) {
        this.manager = manager;
        this.converter = converter;
        this.encoder = encoder;
    }


=======
    private final AuthenticationManager manager;
    private final JwtConverter converter;

    public AuthController(AuthenticationManager manager, JwtConverter converter) {
        this.manager = manager;
        this.converter = converter;
    }

>>>>>>> 7b9fe75cab33e9a5787702ea2b512c2409f48a2f
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
<<<<<<< HEAD
    @PostMapping("/encode")
    public void encode(@RequestBody HashMap<String, String> values) {
        String encodedValue = encoder.encode(values.get("value"));
        System.out.println(encodedValue);
    }

=======
>>>>>>> 7b9fe75cab33e9a5787702ea2b512c2409f48a2f
}