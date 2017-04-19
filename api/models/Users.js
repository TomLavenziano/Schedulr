/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstName: {
        type: 'string'
    },

    lastName: {
        type: 'string'
    },

    email: {
        type: 'string'
    },

    phone: {
        type: 'string'
    },

    createdAt: {
      type: 'string'
    },

    updatedAt: {
      type: 'string'
    },

    events: {
      collection: 'events',
      via: 'owner'
    }

  }
};