package learn.capstone.data;

import learn.capstone.models.WishList;

import java.sql.ResultSet;
import java.sql.SQLException;

public class WishListMapper {
    @Override
    public WishList mapRow(ResultSet resultSet, int i) throws SQLException {
        WishList wishList = new WishList();
        wishList.setWishListId(resultSet.getInt("wishlist_id"));
        wishList.setAppUserId(resultSet.getInt("app_user_id"));
        wishList.setCity(resultSet.getString("city"));

        return wishList;
    }
}
