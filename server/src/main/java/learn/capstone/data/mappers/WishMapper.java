package learn.capstone.data.mappers;

import learn.capstone.models.Wish;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class WishMapper implements RowMapper<Wish> {
    @Override
    public Wish mapRow(ResultSet rs, int rowNum) throws SQLException {
        Wish wish = new Wish();
        wish.setWishId(rs.getInt("wish_id"));
        wish.setAppUserId(rs.getInt("app_user_id"));
//        wish.setCity(rs.getString("city"));

        return wish;
    }
}
