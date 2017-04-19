/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    startAt: {
      type: 'date'
    },

    endAt: {
      type: 'date'
    },

    notes: {
      type: 'array'
    },

    busy: {
      type: 'bool'
    },

    createdAt: {
      type: 'string'
    },

    updatedAt: {
      type: 'string'
    },

    owner: {
      model: 'users'
    }

  }
};
