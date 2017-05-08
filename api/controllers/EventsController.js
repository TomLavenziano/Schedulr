/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * NOTE: Always define the Owner attribute with the ObjectID of a user on creation.
 */

const moment = require('moment');

module.exports = {

	create: function(req, res) {
	  Events.create(req.body).exec(function(err, result){
	    if (err) {
	      //Handle Error
	    }
	    return res.redirect('/schedule');
	  });
	},

	getEventsByUser: (req, res) => {
		console.log("Event Owner: ");
		var ownerID = req.params.ownerID ? req.params.ownerID : req.session.user.id;
		console.log(ownerID);

		Users.findOne({ id: ownerID }).populate('events').exec(function (err, user) {
			if (err) { return res.send(err); }
			var eventsArray = user.events;
			var returnEvents = [];
			console.log(user.events);
			for (events of eventsArray) {
				var startDateTime = moment(events.startDate + ' ' + events.startTime, "DD MMM, YYYY hh:mmA");
				var endDateTime = moment(events.endDate + ' ' + events.endTime, "DD MMM, YYYY hh:mmA");
				var returnEvent = {
					id: events.id,
					title: events.title,
					description: events.description,
					start: startDateTime,
					end: endDateTime,
					owner: events.owner,
					allDay: events.allday,
					createdAt: events.createdAt
				};
				returnEvents.push(returnEvent);
			}
			return res.json(returnEvents);
		});
	},

	details: (req, res) => {
		var eventID = req.params.eventID;
		Events.findOne({ id : eventID }).exec(function(err, eventDetails) {
			return res.send({ eventDetails : eventDetails });
		});
	}

	// add: (req, res) => res.send('Add Event'),
	//
	// delete: (req, res) => res.send('Delete Event'),
	//
	// edit: (req, res) => res.send('Modify Event'),
	//
	// // @deprecated Events must always have a parent user, so are these really neccessary?
	// // An Event should always be linked automatically during creation through the DB, the
	// // Event owner is a required field for the insertion of an Event document.
	// link: function (req, res) {
	//   return res.send('Link Event To User');
  // },
	// unlink: function (req, res) {
	//   return res.send('Unlink Event From User');
  // }

};
