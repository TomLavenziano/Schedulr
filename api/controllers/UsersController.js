/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req, res) {
	  Users.create(req.body).exec(function(err, result){
	    if (err) {
	      //Handle Error
	    }
	    return res.redirect('/profile');
	  });
	},


	profile: (req, res) => {
		var name = req.params.name;
		var userId = req.session.user.id ? req.session.user.id : null;
		console.log("Profile Req: ");
		console.log(req.session.user);

		if( name || userId ) {
			Users.findOne({
				or : [
					{ id: userId },
					{ firstName: { 'contains' : name } },
					{ lastName: { 'contains' : name } }
				]
			}).populate('events').exec(function(err, profileUser) {
				if(err) return res.serverError(err);
				console.log("Found user: ");
				console.log(profileUser);
				return res.view('profile', { profileUser : profileUser });
			});
		} else {
			//TODO Handle this better
			// return res.view('profile', { profileUser : req.session.user });
			res.redirect('/');
		}
	}



	// ,addUser: (req, res) => {
	// 	var user = req.body.user || undefined;
	// 	UsersService.removeUser(userID, success => res.json(success));
	// },
	// removeUser: (req, res) => {
	// 	var userID = req.body.userID || undefined;
	// 	UsersService.removeUser(userID, success => res.json(success));
	// },
	// editUser: (req, res) => {
	// 	var user = req.body.userID || undefined;
	// 	UsersService.editUser(userID, success => res.json(success));
	// }

};
