package learn.capstone.data;

import learn.capstone.models.Entertainment;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EntertainmentMapper {
    @Override
    public Entertainment mapRow(ResultSet resultSet, int i) throws SQLException {
        Entertainment entertainment = new Entertainment();
        entertainment.setEntertainmentId(resultSet.getInt("entertainment_id"));
        entertainment.setEntertainmentName(resultSet.getString("entertainment_name"));
        entertainment.setKidFriendly(resultSet.getInt("kid_friendly"));
        entertainment.setPriceRange(resultSet.getString("price_range"));

        return entertainment;
    }
}