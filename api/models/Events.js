/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    eventID : {
        type: 'integer',
        autoIncrement: true,
        unique: true
    },

    eventTitle : {
        type: 'string'
    },

    ownerID : {
        type: 'integer'
    },

    startDateTime : {
        type: 'datetime'
    },

    endDateTime : {
        type: 'datetime'
    },

    desc : {
        type: 'object'
    },

    notes : {
        type: 'object'
    },

    busy : {
        type: 'boolean'
    }
  }
};
