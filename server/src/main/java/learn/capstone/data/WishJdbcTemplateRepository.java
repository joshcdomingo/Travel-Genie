package learn.capstone.data;

import learn.capstone.data.mappers.WishMapper;
import learn.capstone.models.Wish;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class WishJdbcTemplateRepository implements WishFileRepository {

    private final JdbcTemplate jdbcTemplate;

    public WishJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Wish findById(int wishId) {
        final String sql = "select wish_id, app_user_id, city_id, entertainment_id "
                + "from wish "
                + "where wish_id = ?;";


        Wish wish = jdbcTemplate.query(sql, new WishMapper(), wishId)
                .stream()
                .findFirst().orElse(null);

        return wish;
    }

    @Override
    public List<Wish> findAll() {
        final String sql = "select wish_id, app_user_id, city_id, entertainment_id "
                + "from wish;";

        return jdbcTemplate.query(sql, new WishMapper());
    }
}
