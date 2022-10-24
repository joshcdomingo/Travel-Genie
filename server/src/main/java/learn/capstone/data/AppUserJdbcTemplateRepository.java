package learn.capstone.data;

import learn.capstone.models.AppUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.util.List;

@Repository
public class AppUserJdbcTemplateRepository {

    private final JdbcTemplate jdbcTemplate;

    private RowMapper<AppUser> userMapper = (ResultSet rs, int rowIndex) -> {
        AppUser user = new AppUser();
        user.setAppUserId(rs.getInt("app_user_id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password_hash"));
        user.setEnabled(rs.getBoolean("enabled"));
        return user;
    };

    private RowMapper<GrantedAuthority> authorityMapper = (ResultSet rs, int index) -> {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(rs.getString("name"));
        return authority;
    };

    public AppUserJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public AppUser findByUsername(String username) {

        String sql = "select app_user_id, username, password_hash, enabled "
                + "from app_user "
                + "where username = ?;";

        AppUser user = jdbcTemplate.query(sql, userMapper, username).stream()
                .findFirst().orElse(null);

        if (user != null) {
            attachAuthorities(user);
        }

        return user;
    }

    private void attachAuthorities(AppUser user) {

        String sql = "select ar.`name` "
                + "from app_user_role aur "
                + "inner join app_role ar on aur.app_role_id = ar.app_role_id "
                + "where aur.app_user_id = ?;";

        List<GrantedAuthority> authorities = jdbcTemplate.query(sql,
                authorityMapper, user.getAppUserId());

        user.setAuthorities(authorities);
    }
}