package learn.capstone.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

<<<<<<< HEAD


    private final JwtConverter converter;

    public SecurityConfig(JwtConverter converter) {
        this.converter = converter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,
                                           AuthenticationConfiguration config) throws Exception {

        http.csrf().disable();
        http.cors();

        http.authorizeRequests()
                .antMatchers(HttpMethod.GET,
                        "/api/travelgenie",
                        "/api/travelgenie/*").permitAll()
                .antMatchers(HttpMethod.POST, "/authenticate").permitAll()
                .antMatchers(HttpMethod.POST, "/refresh").authenticated()
                .antMatchers(HttpMethod.PUT, "/api/travelgenie/*").hasAnyAuthority("USER")
                .antMatchers("/**").denyAll()
                .and()
                .addFilter(new JwtRequestFilter(manager(config), converter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Bean
    public AuthenticationManager manager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
=======
    //TODO CHANGE ANTMATCHERS

//    private final JwtConverter converter;
//
//    public SecurityConfig(JwtConverter converter) {
//        this.converter = converter;
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http,
//                                           AuthenticationConfiguration config) throws Exception {
//
//        http.csrf().disable();
//        http.cors();
//
//        http.authorizeRequests()
//                .antMatchers(HttpMethod.GET,
//                        "/api/solarpanel",
//                        "/api/solarpanel/*",
//                        "/api/solarpanel/section/*").permitAll()
//                .antMatchers(HttpMethod.POST, "/authenticate").permitAll()
//                .antMatchers(HttpMethod.POST, "/refresh").authenticated()
//                .antMatchers(HttpMethod.POST, "/api/solarpanel").hasAnyAuthority("USER", "ADMIN")
//                .antMatchers(HttpMethod.PUT, "/api/solarpanel/*").hasAnyAuthority("USER", "ADMIN")
//                .antMatchers(HttpMethod.DELETE, "/api/solarpanel/*").hasAuthority("ADMIN")
//                .antMatchers("/**").denyAll()
//                .and()
//                .addFilter(new JwtRequestFilter(manager(config), converter))
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//
//        return http.build();
//    }
//
//    @Bean
//    public AuthenticationManager manager(AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager();
//    }
>>>>>>> 7b9fe75cab33e9a5787702ea2b512c2409f48a2f
}