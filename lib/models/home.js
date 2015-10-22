module.exports = function(Application) {
	var model = {};

	model.getTitle = function() {
		return 'Welcome';
	};

	model.getWords = function() {
		return 'Webpack-Mithriljs-Boilerplate';
	};

	model.error = function(err) {
		console.log(err);
	};

	model.async = function() {

		return Application.m.request({
			method: "GET",
			url: "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312",
		})
	};

	return model;
};