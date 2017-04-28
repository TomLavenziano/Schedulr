/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
