/**
 * Tasks.js
 *
 * @desciption :: Model for tasks
 */

module.exports = {

  autoCreatedAt: true,
  autoUpdatedAt: true,

  attributes: {

    name: {
      type: 'string',
      maxLength: 64
    },

    description: {
      type: 'string'
    },

    status: {
      type: 'boolean',
      defaultsTo: false
    },

    deadLine: {
      type: 'datetime'
    }

  }

};
