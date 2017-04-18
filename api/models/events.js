/**
 * Events.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    user_id : {
        type: 'objectid'
    },

    title : {
        type: 'string'
    },

    description : {
        type: 'string'
    },

    start : {
        type: 'date'
    },

    end : {
        type: 'date'
    },

    notes : {
        type: 'array'
    },

    busy : {
        type: 'bool'
    }

  }
};
