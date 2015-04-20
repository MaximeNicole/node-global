/**
 * Categories.js
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

    tasks: {
      collection: 'tasks',
      via: 'category'
    }

  }

};
