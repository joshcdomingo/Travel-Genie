package learn.capstone.data.mappers;

import learn.capstone.models.Entertainment;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EntertainmentMapper implements RowMapper<Entertainment> {

    @Override
    public Entertainment mapRow(ResultSet rs, int rowNum) throws SQLException {
        return null;
    }
}
