package learn.capstone.data;

import learn.capstone.data.mappers.CityMapper;
import learn.capstone.models.City;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class CityJdbcTemplateRepository implements CityFileRepository {
    private final JdbcTemplate jdbcTemplate;

    public CityJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public City findById(int cityId) {
        final String sql = "select c.city_id, c.city_name "
                + "co.country_id, country_name "
                + "s.scenery_id, s.scenery_name "
                + "e.entertainment_id, e.activity_level, e.price_range, e.kid_friendly "
                + "from city c "
                + "inner join country co on c.country_id = co.country_id "
                + "inner join scenery s on c.scenery_id = s.scenery_id "
                + "inner join entertainment e on c.entertainment_id = e.entertainment_id "
                + "where c.city_id = ?;";


        City city = jdbcTemplate.query(sql, new CityMapper(), cityId)
                .stream()
                .findFirst().orElse(null);

        return city;
    }

    @Override
    public City findBySceneryId(int cityId) {
        final String sql = "select c.city_id, c.city_name "
                + "co.country_id, country_name "
                + "s.scenery_id, s.scenery_name "
                + "e.entertainment_id, e.activity_level, e.price_range, e.kid_friendly "
                + "from city c "
                + "inner join country co on c.country_id = co.country_id "
                + "inner join scenery s on c.scenery_id = s.scenery_id "
                + "inner join entertainment e on c.entertainment_id = e.entertainment_id "
                + "where c.scenery_id = ?;";


        City city = jdbcTemplate.query(sql, new CityMapper(), cityId)
                .stream()
                .findFirst().orElse(null);

        return city;
    }

    @Override
    public City findByEntertainmentId(int cityId) {
        final String sql = "select c.city_id, c.city_name "
                + "co.country_id, country_name "
                + "s.scenery_id, s.scenery_name "
                + "e.entertainment_id, e.activity_level, e.price_range, e.kid_friendly "
                + "from city c "
                + "inner join country co on c.country_id = co.country_id "
                + "inner join scenery s on c.scenery_id = s.scenery_id "
                + "inner join entertainment e on c.entertainment_id = e.entertainment_id "
                + "where c.entertainment_id = ?;";


        City city = jdbcTemplate.query(sql, new CityMapper(), cityId)
                .stream()
                .findFirst().orElse(null);

        return city;
    }

    @Override
    public List<City> findAll() {
        final String sql = "select city_id, city_name, country_id, scenery_id, entertainment_id "
                + "from city;";

        return jdbcTemplate.query(sql, new CityMapper());
    }
}
