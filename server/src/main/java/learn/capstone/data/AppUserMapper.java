package learn.capstone.data;

import java.sql.ResultSet;
import java.sql.SQLException;
import learn.capstone.models.AppUser;

public class AppUserMapper {
    @Override
    public AppUser mapRow(ResultSet resultSet, int i) throws SQLException {
        AppUser appUser = new AppUser();
        appUser.setAppUserId(resultSet.getInt("app_user_id"));
        appUser.setUsername(resultSet.getString("username"));
        appUser.setNickname(resultSet.getString("nickname"));
        appUser.setPassword(resultSet.getString("password_hash"));
        appUser.setEnabled(resultSet.getBoolean("enabled"));

        return appUser;
    }
}