/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function (req, res) {
	  return res.send('Add Event');
	},
	delete: function (req, res) {
	  return res.send('Delete Event');
  	},
	edit: function (req, res) {
	  return res.send('Modify Event');
  	},
	link: function (req, res) {
	  return res.send('Link Event To User');
  	},
	unlink: function (req, res) {
	  return res.send('Unlink Event From User');
  	}

};
