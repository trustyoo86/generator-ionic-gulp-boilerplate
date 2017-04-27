'use strict'

/**
 * @memberof app
 * @ngdoc config
 * @name config
 * @description router 및 기타 angular configuration
 * @param {service} $stateProvider angular-ui-router $stateProvider
 * @param {service} $urlRouterProvider angular-ui-router $urlRouterProvider
 */
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/playlists');

  $stateProvider
    .state('app', {
      url : '/app',
      abstract : true,
      templateUrl : 'pages/home/views/menu.html',
      controller : 'homeController as home'
    })
    .state('app.search', {
      url : '/search',
      views : {
        'menuContent' : {
          templateUrl : 'pages/search/views/search.html'
        }
      }
    })
    .state('app.browse', {
      url : '/browse',
      views : {
        'menuContent' : {
          templateUrl : 'pages/browse/views/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url : '/playlists',
      views : {
        'menuContent' : {
          templateUrl : 'pages/playlists/views/playlists.html',
          controller : 'playlistsController'
        }
      }
    })
    .state('app.single', {
      url : '/playlists/:playlistId',
      views : {
        'menuContent' : {
          templateUrl : 'pages/playlists/views/playlist.html',
          controller : 'playlistController'
        }
      }
    });
});
