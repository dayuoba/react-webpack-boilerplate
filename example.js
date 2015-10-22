var authDB = ;
var accountDB = ;

authDB.main.find({roles: 3}).toArray(function(ids) {
	ids.forEach(function(item) {
		var id = item._id;
		accountDB.main.update({_id: id}, {$set:{'info.type': 34}});
	});
});