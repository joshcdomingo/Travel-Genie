package learn.capstone.data;

import learn.capstone.data.mappers.WishMapper;
import learn.capstone.models.Wish;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class WishJdbcTemplateRepository implements WishFileRepository {

    private final JdbcTemplate jdbcTemplate;

    public WishJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Wish findById(int wishId) {
        final String sql = "select wish_id, app_user_id, city_id, entertainment_id " +
                "from wish " +
                "where wish_id = ?";

        return jdbcTemplate.query(sql, new WishMapper(), wishId).stream().findFirst().orElse(null);
    }

    @Override
    public List<Wish> findByAppUserId(int app_userId) {
        final String sql = "select wish_id, app_user_id, city_id, entertainment_id " +
                "from wish " +
                "where app_user_id = ?";

        return jdbcTemplate.query(sql, new WishMapper(), app_userId);
    }


    @Override
    public List<Wish> findAll() {
        final String sql = "select wish_id, app_user_id, city_id, entertainment_id "
                + "from wish;";

        return jdbcTemplate.query(sql, new WishMapper());
    }

    @Override
    public Wish add(Wish wish) {
     final String sql = "insert into wish (app_user_id, city_id, entertainment_id) " +
             "values (?, ?, ?);";

     KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1, wish.getAppUserId());
            statement.setInt(2, wish.getCityId());
            statement.setInt(3, wish.getEntertainmentId());
            return statement;
        }, keyHolder);

        if (rowsAffected == 0) {
            return null;
        }

        wish.setWishId(keyHolder.getKey().intValue());

        return wish;
    }

    @Override
    public boolean deleteById(int wishId) {
        return jdbcTemplate.update("delete from wish where wish_id = ?;", wishId) > 0;
    }
}
