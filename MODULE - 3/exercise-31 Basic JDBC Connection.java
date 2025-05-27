import java.sql.*;

public class JDBCConnect {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM students");

        while (rs.next()) {
            System.out.println(rs.getString("name"));
        }

        conn.close();
    }
}
