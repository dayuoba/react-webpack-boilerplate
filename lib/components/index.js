module.exports = function(Application) {
	var Components = {
		_modules: {
			dashboard: require('./dashboard.js')(Application),
			todo: require('./todo.js')(Application),
			home: require('./home.js')(Application),
		}
	};

	Components.get = function(name) {
		return this._modules[name];
	};

	Components.getModules = function() {
		return this._modules;
	};

	Components.setView = function(key, value) {
		this._modules[key].view = value;
	};

	Components.setModel = function(key, value) {
		this._modules[key].model = value;
	};

	return Components;

};


