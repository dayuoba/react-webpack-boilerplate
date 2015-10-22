module.exports = function(Application) {
	return function(controler) {

		var handler = Application.m.withAttr("value", function(value) {
				console.log(value)
			});
			

		return <div id="container">
			<input type="text" onchange={ handler } />
		</div>
	}
	
};