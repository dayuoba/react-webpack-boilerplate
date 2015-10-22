module.exports = function(Application) {
	var Views = {
		_views: {
			defaultHtmlHeaders: require('./defaultHtmlHeaders.jsx'),
			dashboard: require('./dashboard.jsx'),
			todo: require('./todo.jsx')(Application),
			home: require('./home.jsx')(Application)
		}
	};

	Views.get = function(name) {
		return this._views[name];
	};

	Views.getViews = function(key, value) {
		return this._views;
	};

	return Views;

};


