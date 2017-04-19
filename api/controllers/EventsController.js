/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * NOTE: Always define the Owner attribute with the ObjectID of a user on creation.
 */

module.exports = {
	add: (req, res) => res.send('Add Event'),

	delete: (req, res) => res.send('Delete Event'),

	edit: (req, res) => res.send('Modify Event'),

	// @deprecated Events must always have a parent user, so are these really neccessary?
	// An Event should always be linked automatically during creation through the DB, the
	// Event owner is a required field for the insertion of an Event document.
	link: function (req, res) {
	  return res.send('Link Event To User');
  },
	unlink: function (req, res) {
	  return res.send('Unlink Event From User');
  }

};
