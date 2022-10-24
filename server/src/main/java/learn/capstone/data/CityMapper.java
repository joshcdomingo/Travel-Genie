package learn.capstone.data;

import learn.capstone.models.City;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CityMapper {
    @Override
    public City mapRow(ResultSet resultSet, int i) throws SQLException {
        City city = new City();
        city.setCityId(resultSet.getInt("city_id"));
        city.setCityName(resultSet.getString("city_name"));

        return city;
    }
}