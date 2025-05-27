public void transferMoney(Connection conn, int from, int to, double amount) throws SQLException {
    conn.setAutoCommit(false);
    try {
        PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
        PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");

        debit.setDouble(1, amount); debit.setInt(2, from); debit.executeUpdate();
        credit.setDouble(1, amount); credit.setInt(2, to); credit.executeUpdate();

        conn.commit();
    } catch (SQLException e) {
        conn.rollback();
        throw e;
    }
}
