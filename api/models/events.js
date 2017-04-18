/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

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
    },

    user_id : {
        type: 'objectid'
    }
  }
};
