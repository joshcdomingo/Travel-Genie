package learn.capstone.data;

import learn.capstone.data.mappers.EntertainmentMapper;
import learn.capstone.models.Entertainment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EntertainmentJdbcTemplateRepository implements EntertainmentFileRepository {
    private final JdbcTemplate jdbcTemplate;

    public EntertainmentJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Entertainment findById(int entertainmentId) {
        final String sql = "select entertainment_id, entertainment_name, activity_level, price_range, kid_friendly "
                + "from entertainment "
                + "where entertainment_id = ?;";


        Entertainment entertainment = jdbcTemplate.query(sql, new EntertainmentMapper(), entertainmentId)
                .stream()
                .findFirst().orElse(null);

        return entertainment;
    }

    @Override
    public List<Entertainment> findAll() {
        final String sql = "select entertainment_id, entertainment_name, activity_level, price_range, kid_friendly "
                + "from entertainment;";

        return jdbcTemplate.query(sql, new EntertainmentMapper());
    }
}
