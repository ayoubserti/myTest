/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/MyContacts_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_MyContacts_db_schema = [];
const db_MyContacts_db = [];

/**
 * SCHEMA DB MyContacts_db
 */



 /**
  * Company
  */
db_MyContacts_db_schema.Company = new mongoose.Schema({
	address: {
		type: 'String'
	},
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	company: {
		type: Schema.ObjectId,
		ref : "Contact"
	},
	*/
});


 /**
  * Contact
  */
db_MyContacts_db_schema.Contact = new mongoose.Schema({
	email: {
		type: 'String'
	},
	name: {
		type: 'String', 
		required : true
	},
	note: {
		type: 'String'
	},
	phone: {
		type: 'String'
	},
	surname: {
		type: 'String'
	},
	//RELATIONS
	company: {
		type: Schema.ObjectId,
		ref : "Company"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Table1
  */
db_MyContacts_db_schema.Table1 = new mongoose.Schema({
	name: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * User
  */
db_MyContacts_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./MyContacts_db_customSchema.js');
var MyContacts_db_model = require('./MyContacts_db_crud.js');

// Declare mongoose model

db_MyContacts_db.Company = MyContacts_db_model.connection.model('Company', db_MyContacts_db_schema.Company );
db_MyContacts_db.Contact = MyContacts_db_model.connection.model('Contact', db_MyContacts_db_schema.Contact );
db_MyContacts_db.Table1 = MyContacts_db_model.connection.model('Table1', db_MyContacts_db_schema.Table1 );
db_MyContacts_db.User = MyContacts_db_model.connection.model('User', db_MyContacts_db_schema.User );

module.exports = db_MyContacts_db;

// Create ADMIN user if does not exist
createUser.createUser();
