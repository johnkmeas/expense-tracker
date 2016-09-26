var mongoose = require('mongoose');

// Schema
var expenseSchema = mongoose.Schema({
	purchase : {
		type: String,
		require: true
	},
	price : {
		type: Number,
		require: true
	},
	create_data: {
		type: Date,
		default: Date.now
	}
},{collection : 'expense'});

var Expense = module.exports = mongoose.model('Expense', expenseSchema);

// Get all expenses
module.exports.getExpenses = function(callback, limit){
	Expense.find(callback).limit(limit);
}
// Get expense by id
module.exports.getExpenseById = function(id, callback){
	Expense.findById(id, callback);
}

// Add an expense
module.exports.addExpense = function(expense, callback){
	Expense.create(expense, callback);
}

// Update an expense
module.exports.updateExpense = function(id, expense, price, options, callback){
	var query = {_id: id};
	var update = {
		purchase: expense.purchase,
		price: expense.price
	}
	Expense.findOneAndUpdate(query, update, options, callback);
}

// Delete an expense
module.exports.deleteExpense = function(id, callback){
	var query = {_id: id};
	Expense.remove(query, callback);
}
