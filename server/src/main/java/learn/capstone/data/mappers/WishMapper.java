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
<<<<<<< HEAD
//        wish.setCity(rs.getString("city"));
=======
        wish.setCityId(rs.getInt("city"));
        wish.setEntertainmentId(rs.getInt("entertainment_list"));
>>>>>>> 56302f55eb0038369918ce1f0e6a00a8beaa1773

        return wish;
    }
}

