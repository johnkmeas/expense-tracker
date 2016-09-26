var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

var Expense = require('./models/expense');

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/expense-tracker');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/expense')
});

app.get('/api/expense', function(req, res){
	Expense.getExpenses(function(err, expense){
		if(err){
			throw err;
		}
		res.json(expense);
	})
});

app.post('/api/expense', function(req, res){
	var expense = req.body;
	Expense.addExpense(expense, function(err, expense){
		if(err){
			throw err;
		}
		res.json(expense);
	})
});

app.put('/api/expense/:_id', function(req, res){
	var id = req.params._id;
	var expense = req.body;
	Expense.updateExpense(id, expense, {}, function(err, expense){
		if(err){
			throw err;
		}
		res.json(expense);
	})
});

app.delete('/api/expense/:_id', function(req, res){
	var id = req.params._id;
	Expense.deleteExpense(id, function(err, expense){
		if(err){
			throw err;
		}
		res.json(expense);
	})
});

app.get('/api/expense/:_id', function(req, res){
	Expense.getExpenseById(req.params._id, function(err, expense){
		if(err){
			throw err;
		}
		res.json(expense);
	})
});

app.listen(3000);
console.log('Running on port 3000')

