'use strict';

/**
 * @memberof app
 * @ngdoc controller
 * @name playlistsController
 * @description play lists controller
 * @return {Service} $scope Angular scope service
 */
function playlistsController($scope) {
  /**
   * @memberof playlistsController
   * @name playLists
   * @description play lists array
   * @type {Array}
   */
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
};

app.controller('playlistsController', ['$scope', playlistsController]);
