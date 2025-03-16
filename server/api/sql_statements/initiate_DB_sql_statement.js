/* First  - Initial Database setup

   Database Name - blingBank
   └───Schema - fannypacks
    | │ Table - person - User Details
    | │ Table - accounts - User's Account Details
    │ │ Table - account_id_transactions - User Account's Transaction Details
     
    is_db_exits
	kill_connection
	drop_Database
	create_Database
    create_Schema
*/
// Import app config labels
const {database_labels, database_connection} = require('../db.config');

// Check if the Database is exits
const is_db_exits = {
    title: "is_db_exits",
    sql: `SELECT 1 from pg_database WHERE datname='${database_labels.db_name}';`
}
// Kill Connection to Database
const kill_connection = {
    title: "kill_connection",
    sql: `SELECT *, pg_terminate_backend(pid)
            FROM pg_stat_activity 
            WHERE pid <> pg_backend_pid() AND datname='${database_labels.db_name}';`
}
// Drop Database if exits
const drop_app_Database = {
    title: "drop_app_Database",
    sql: `DROP DATABASE ${database_labels.db_name};`
}
// Create Database
const create_app_Database = {
    title: "create_app_Database",
    sql: `CREATE DATABASE ${database_labels.db_name};`
}
// Create Schema
const create_app_Schema = {
    title: "create_schema",
    sql: `CREATE SCHEMA IF NOT EXISTS ${database_labels.schema_name}  
        AUTHORIZATION ${database_connection.user};`
}
// Create Table Persons
const create_table_persons = {
    title: "create_table_persons",
    sql: `CREATE TABLE IF NOT EXISTS
        ${database_labels.schema_name}.${database_labels.table_persons}
        (
            person_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
            person_username VARCHAR(24) UNIQUE NOT NULL,
            person_fname VARCHAR(36) NOT NULL,
            person_lname VARCHAR(36) NOT NULL,
            person_password VARCHAR(254) NOT NULL,
            person_created VARCHAR(254),
            person_lastlogin TIMESTAMP
        );`
}
// Create Table Accounts
const create_table_accounts = {
    title: "create_table_accounts",
    sql: `CREATE TABLE IF NOT EXISTS
        ${database_labels.schema_name}.${database_labels.table_accounts}
        (
            account_id SERIAL PRIMARY KEY UNIQUE NOT NULL,
            account_owner_id SERIAL NOT NULL,
            account_name VARCHAR(36) NOT NULL,
            account_type VARCHAR(36) NOT NULL,
            account_created TIMESTAMP
        );`
  }
// Export
const statements = {
    is_db_exits: is_db_exits,
    kill_connection: kill_connection,
    drop_app_Database: drop_app_Database,
    create_app_Database: create_app_Database,
    create_app_Schema: create_app_Schema,
    create_table_persons: create_table_persons,
    create_table_accounts: create_table_accounts
}
module.exports = statements;
