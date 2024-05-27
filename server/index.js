require("dotenv").config();

const mysql = require("mysql2/promise");

const createDB = async () => {
  try {
    // Create a specific connection to the database

    const databaseClient = await mysql.createConnection({
      host: "localhost",
      port: "3306",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    // Drop the existing database if it exists

    await databaseClient.query("DROP DATABASE IF EXISTS wildseries");

    // Create a new database with the specified name

    await databaseClient.query("CREATE DATABASE wildseries");

    // Switch to the newly created database

    await databaseClient.query("USE wildseries");

    // Execute the SQL statements to update the database schema

    await databaseClient.query(`CREATE TABLE program(

      id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,

      title VARCHAR(100) NOT NULL

    )`);

    // Close the database connection

    databaseClient.end();

    console.info("wildseries updated 🆙");
  } catch (err) {
    console.error("Error updating the database:", err.message, err.stack);
  }
};

// Run the createDB function

createDB();
