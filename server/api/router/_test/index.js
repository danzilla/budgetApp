const { blingBank, postgresDefault } = require('../../db.config');

const Test = (req, res, next) => {
	// Test 1
	let pageMessage = { 
		title:"Test", 
		message: "Test Test ", 
		checked: "false", 
		result: ""
	};
	async function asyncCall() {
		try {
			const result = await postgresDefault.query(`SELECT 1 from pg_database WHERE datname='public';`);
			pageMessage.message = "Return with results";
			pageMessage.checked = "true", 
			pageMessage.result = result;
		} catch (error) {
			pageMessage.message = "Error";
			pageMessage.checked = "false", 
			pageMessage.result = error;
		} finally { 
			res.send(pageMessage); 
		}
	  }
	  asyncCall();
}

const Test2 = (req, res, next) => {
	// Test 2
	let pageMessage = { 
		title:"Test2", 
		message: "Test2 Test2 ", 
		checked: "false", 
		result: "Test2 Test2 Test2 Test2" 
	};
	res.send({ pageMessage: pageMessage });
}

module.exports = {
	Test: Test,
	Test2: Test2
};



