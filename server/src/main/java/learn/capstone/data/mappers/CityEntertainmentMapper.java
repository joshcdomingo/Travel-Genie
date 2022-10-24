package learn.capstone.data.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CityEntertainmentMapper implements RowMapper<CityEntertainment> {

    @Override
    public CityEntertainment mapRow(ResultSet rs) throws SQLException {

        CityEntertainment cityEntertainment = new CityEntertainment();
        cityEntertainment.setCityId(rs.getInt("city_id"));
        cityEntertainment.setEntertainmentId(rs.getInt("entertainment_id"));

        return CityEntertainment;
    }
}