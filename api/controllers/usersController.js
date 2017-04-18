/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addUser: function (req, res) {
		userService.addUser(function(add){
			res.json(success);
		})
	},
	removeUser: function (req, res) {
		var userID = (req.body.userID) ? req.body.userID : undefined;
		userService.removeUser(userID, function(success){
			res.json(success);
		})
	},
	editUser: function (req, res) {
		var user = (req.body.user) ? req.body.user : undefined;
		userService.editUser(user, function(success){
			res.json(success);
		})
	},
	linkEvent: function(req, res) {
		var newEvent = (req.body.newEvent) ? req.body.newEvent : undefined;
		userService.linkEvent(newEvent, function(success){
			res.json(success);
		})
	},
	unlinkEvent: function(req, res) {
		var rmEvent = (req.body.rmEvent) ? req.body.newEvent : undefined;
		user.Service.unlinkEvent(rmEvent, function(success){
			res.json(success);
		})
	}

};
