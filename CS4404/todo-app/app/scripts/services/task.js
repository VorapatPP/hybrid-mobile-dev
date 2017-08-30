'use strict';

/**
 * @ngdoc service
 * @name todoApp.Task
 * @description
 * # Task
 * Service in the todoApp.
 */
angular.module('todoApp').service('Task', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    self.createTask = function (title = 'Untitled task') {
      return {
        title: title,
        isCompleted: false
      };
    };
  });
