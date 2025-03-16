// Databases - labels
// App Database configuration - Labels
/*
 * Database Name - blingBank
 * └───Schema - fannypacks
 * |   │   Table - person - User Details
 * |   |   Table - accounts - User's Account Details
 * |   |   Table - account_id_transactions - User Account's Transaction Details
 */
// If Docker Deoloyment - SET (PROD) - db_config.database_host_dev_prod.prod
// If Local Development - SET (DEV) - db_config.database_host_dev_prod.dev
// Dev environment for docker_compose and npm
const database_host_dev_prod = {
    dev: "0.0.0.0",
    prod: "postgres_db"
}
// DB_HOST Configuration
const db_Host = database_host_dev_prod.dev;
// Database labels
const database_labels = {
    db_name: "blingbank",
    schema_name: "fannypacks",
    table_persons: "persons",
    table_accounts: "accounts"
}
// database connection strings
const database_connection = {
    user: "danzilla",
    pwd: "heyho",
    port: "5432",
    defaultDB: "public",
    blingbbankDB: database_labels.db_name
}
// Databases settings and configurations
// pg connection for | blingBank and postgresDefault Databases
// Postgres connection
const { Pool } = require('pg');
// init - DB connection
// DB pool for - blingbank
const blingBank = new Pool({
	user: database_connection.user,
	password: database_connection.pwd,
	host: db_Host,
	port: database_connection.port,
	database: database_connection.blingbbankDB, // Database is BlingBank
    max: 69, // max number of clients in the pool
    idleTimeoutMillis: 30000
})
// DB pool for - postgresDefault - public
const postgresDefault = new Pool({
	user: database_connection.user,
	password: database_connection.pwd,
	host: db_Host,
	port: database_connection.port,
	database: database_connection.defaultDB, // Database is Public for Default connection
    max: 69, // max number of clients in the pool
    idleTimeoutMillis: 30000
})
// Export app_config
const app_config = {
    database_labels: database_labels,
    database_connection: database_connection,
    blingBank: blingBank,
    postgresDefault: postgresDefault
}
// Export Database config settings
module.exports = app_config;