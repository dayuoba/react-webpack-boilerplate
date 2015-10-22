var mithril = require('mithril');
//TODO App.model App.route App.view
var Application = {
	status: null,
	_settings: {},
	m: mithril,
	Views: {}
};

Application.start = function() {
	// Application.m.redraw();
};

Application.init = function(config) {
	Application.set('config', config);

	Application.setUpPath();

	Application.setUpComponents();

	Application.setUpRoutes();
	return this;
};

Application.set = function(key, value, selfAttribute) {
	if (selfAttribute) return this[key] = value;
	this._settings[key] = value;
};

Application.get = function(key, selfAttribute) {
	return selfAttribute ?
		this[key] :
		this._settings[key] ; 
};

Application.setUpPath = function() {
	this.set('ROOT_PATH', './');
	this.set('COMPONENTS_PATH', this.get('ROOT_PATH') + 'components');
	this.set('VIEW_PATH', this.get('ROOT_PATH') + 'views');
	this.set('MODEL_PATH', this.get('ROOT_PATH') + 'models');
	this.set('UTIL_PATH', this.get('ROOT_PATH') + 'utils');
};

Application.setUpComponents = function() {
	// Application.loadStylesheets();
	Application.loadModels(this.get('MODEL_PATH'));
	Application.loadViews(this.get('VIEW_PATH'));
	Application.loadComponents(this.get('COMPONENTS_PATH'));
};

//setUpRoutes routes here
Application.setUpRoutes = function() {
	var Components = this.get('Components', true);

	this.m.route.mode = 'hash';

	this.m.route(document.getElementById('container'), "/", {
	    "/": Components.get('home'),
	    "/home": Components.get('home'),
	    "/dashboard/:userID": Components.get('dashboard')
	});
};

Application.setUpModels = function() {
	var Components = this.get('Components', true).getModules();
	var Models = this.get('Models', true).getModels();
	for (var key in Components) {
		Models[key] ? 
		Components[key].model = Models[key] :
		Components[key].model = 'NO_IMPLEMNTION';
	}
};

Application.setUpViews = function() {
	var Components = this.get('Components', true).getModules();
	var Views = this.get('Views', true).getViews();

	for (var key in Components) {
		Views[key] ? 
		Components[key].view = Views[key] :
		Components[key].view = 'NO_IMPLEMNTION';
	}
};

Application.loadComponents = function(path) {
	Application.set('Components', require(path + '/index.js')(this), true);
	Application.setUpModels();
	Application.setUpViews();
};

Application.loadStylesheets = function(path) {
	console.log('?????')
	var mdl = require('material-design-lite/material.min.css');
	// var mdljs = require('material-design-lite/material.min.js');
	var Material = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
	var app = require('./app.css');
};

Application.loadViews = function(path) {
	Application.set('Views', require(path + '/index.js')(this), true);
};

Application.loadModels = function(path) {
	Application.set('Models', require(path + '/index.js')(this), true);
};

Application.getModel = function() {
	return this._models;
};

Application.getRoute = function() {
	return this._routes;
};

Application.getView = function() {
	return this._views;
};

module.exports = Application;