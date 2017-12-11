var Trip  = require('../models/Trip');

exports.index = function(req, res) {
	Strategy
  .find()
  .where('UserId').equals(req.user.id)
  .then(function(dbStrategy) {
    res.render('strategy/strategies', {
		  layout: 'main-strategies',
		  strategy: dbStrategy
	  });
  });
};

exports.createStrategy = function(req, res) {

	// Add id from User onto req.body
	req.body.UserId = req.user.id;

  var newStrategy = new Strategy(req.body);

  newStrategy.save().then(function(dbPost) {
    res.json(dbPost);
  });
};
