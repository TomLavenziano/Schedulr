/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	profile: (req, res) => {
		var name = req.params.name;
		console.log("Profile Req: ");
		console.log(req.session.user);

		if(!name) {
		 	return res.view('profile', { profileUser : req.session.user });
	 	} else {
			Users.findOne({
				or : [
					{ firstName: {'contains' : name}},
					{ lastName: {'contains' : name}}
				]
			}).exec(function(err, profileUser) {
				if(err) return res.serverError(err);
				console.log("Found user: ");
				console.log(profileUser);
				return res.view('profile', { profileUser : profileUser });
			});
		}
	},
	addUser: (req, res) => {
		var user = req.body.user || undefined;
		UsersService.removeUser(userID, success => res.json(success));
	},
	removeUser: (req, res) => {
		var userID = req.body.userID || undefined;
		UsersService.removeUser(userID, success => res.json(success));
	},
	editUser: (req, res) => {
		var user = req.body.userID || undefined;
		UsersService.editUser(userID, success => res.json(success));
	}

};
