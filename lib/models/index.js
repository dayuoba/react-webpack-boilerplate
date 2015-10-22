module.exports = function(Application) {
	var Models = {
		_models: {
			dashboard: require('./dashboard.js')(Application),
			todo: require('./todo.js')(Application),
			home: require('./home.js')(Application),
		}
	};

	Models.get = function(name) {
		return this._models[name];
	};

	Models.getModels = function() {
		return this._models;
	};

	return Models;

};


