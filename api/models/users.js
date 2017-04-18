/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    userID: {
        type: 'int',
        autoIncrement: true
    },

    firstName: {
        type: 'string'
    },

    lastName: {
        type: 'string'
    },

    email: {
        type: 'string'
    },

    events: {
        type: '[]'
    },

    phoneNumber: {
        type: 'string'
    }
  }
};
