module.exports = function(app){

		// Our model controllers (rather than routes)
		var application = require('./routes/application');
		var users = require('./routes/users');
		var strategies = require('./routes/strategies');
		var pricing = require('./routes/pricing');

		app.use('/', application);
		app.use('/users', users);
		app.use('/strategies', strategies);
		app.use('/pricing', pricing);
		//other routes..
}