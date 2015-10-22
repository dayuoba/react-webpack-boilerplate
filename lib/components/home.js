module.exports = function(Application) {
	var m = Application.m;
	//a sample module
	var home = {};

	home.controller = function() {
		var model = home.model;
		// console.log(model)
		var vm = {};

		vm.getTitle = function() {
			return model.getTitle();
		};

		vm.getWords = function() {
			return model.getWords();
		};

		vm.list = model.async();

		// console.log('???')

		return vm;
	};

	return home;
};