module.exports = function(Application) {
	var m = Application.m;
	//a sample module
	var dashboard = {
	    controller: function() {
	        return {id: m.route.param("userID")};
	    },
	    view: function(controller) {
	        return m("div", controller.id);
	    }
	};

	return dashboard;
};