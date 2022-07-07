const mysql = require('mysql2/promise');

const connectToDatabase = async () => {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'endpoint',
      user: 'user',
      password: 'password',
      database: 'name',
      port: 3306,
    });
  } catch (e) {
    console.error(e);
  }

  return connection;
};

module.exports.executeQuery = async (query, params = []) => {
  let rows = [];
  try {
    const connection = await connectToDatabase();
    [rows] = await connection.execute(query, params);
  } catch (e) {
    console.error(e);
  }

  return rows;
};
