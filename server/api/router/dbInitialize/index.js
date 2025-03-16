// Import Database connection
const { blingBank, postgresDefault } = require('../../db.config');
const { is_db_exits, kill_connection, drop_app_Database, 
	create_app_Database, create_app_Schema, create_table_persons, create_table_accounts
 } = require('../../sql_statements/initiate_DB_sql_statement')

// Page Response
let pageMessage = { 
	title:"Page Message", 
	message: "Message to page", 
	checked: "false or true", 
	result: "Response result"
};
// Check if BlinbBank DB exits or not
const checkDB = (req, res, next) => {
	pageMessage.title = "Check if BlingBank DB exits";
	let collect_results = new Array();
	async function Fire() {
		try {
			await postgresDefault.query(is_db_exits.sql).then(function (res) { collect_results.push(res) });
			pageMessage.message = "Return with results";
			pageMessage.checked = "true", 
			pageMessage.result = collect_results;
		} catch (error) {
			pageMessage.message = "Error";
			pageMessage.checked = "false", 
			pageMessage.result = error;
		} finally { 
			res.send(pageMessage); 
		}
	  }
	  Fire();
}
// Kill Database connections - blinkbank and public
const dropDB = (req, res, next) => {
	pageMessage.title = "Drop Database";
	let collect_results = new Array();
	async function Fire() {
		try {
			await postgresDefault.query(kill_connection.sql).then(function (res) { collect_results.push(res) });
			await postgresDefault.query(drop_app_Database.sql).then(function (res) { collect_results.push(res) });
			pageMessage.message = "Return with results";
			pageMessage.checked = "true", 
			pageMessage.result = collect_results;
		} catch (error) {
			pageMessage.message = "Error";
			pageMessage.checked = "false", 
			pageMessage.result = error;
		} finally {
			res.send(pageMessage); 
		}
	  }
	  Fire();
}
// Check if BlinbBank DB exits or not
const initiateDB = (req, res, next) => {
	pageMessage.title = "Create Database, Schema and Tables for the App";
	let collect_results = new Array();
	async function Fire() {
		try {
			await postgresDefault.query(create_app_Database.sql).then(function (res) { collect_results.push(res) });
			await blingBank.query(create_app_Schema.sql).then(function (res) { collect_results.push(res) });
			await blingBank.query(create_table_persons.sql).then(function (res) { collect_results.push(res) });
			await blingBank.query(create_table_accounts.sql).then(function (res) { collect_results.push(res) });
			pageMessage.message = "Return with results";
			pageMessage.checked = "true", 
			pageMessage.result = collect_results;
		} catch (error) {
			pageMessage.message = "Error";
			pageMessage.checked = "false", 
			pageMessage.result = error;
		} finally { 
			res.send(pageMessage); 
		}
	  }
	  Fire();
}
// Export modules
module.exports = {
	checkDB: checkDB,
	initiateDB: initiateDB,
	dropDB: dropDB
};