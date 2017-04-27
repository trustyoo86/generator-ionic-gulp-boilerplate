'use strict';
/**
 * @name modules
 * @description Angular application 모듈 리스트
 * @type {Array}
 */
var modules = [
  'ionic'
];
/**
 * @ngdoc app
 * @name app
 * @description Angular main app 모듈
 */
var app = angular.module('myApp', modules);

'use strict'

/**
 * @memberof app
 * @ngdoc config
 * @name config
 * @description router 및 기타 angular configuration
 * @param {service} $stateProvider angular-ui-router $stateProvider
 * @param {service} $urlRouterProvider angular-ui-router $urlRouterProvider
 */
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
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
}]);

'use strict';

/**
 * @memberof app
 * @ngdoc run
 * @name run
 * @description Angular on run configuration
 * @param {Service} $ionicPlatform ionic platform service
 */
app.run(["$ionicPlatform", function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
}]);

/**
 * test service
 * @ngdoc service
 * @name testService
 */
var testService = function () {
  return {
    getTest : function () {
      return 'test';
    }
  }
};

app.service('testService', testService);

'use strict';

/**
 * @memberof app
 * @ngdoc controller
 * @name homeController
 * @description home page controller
 */
function homeController($scope, $ionicModal, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('pages/home/views/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
};

app.controller('homeController', ['$scope', '$ionicModal', '$timeout', homeController])

'use strict';

/**
 * @memberof app
 * @ngdoc controller
 * @name playlistController
 * @description play single controller
 */
function playlistController() {

}

app.controller('playlistController', [playlistController]);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbmZpZy5qcyIsInJ1bi5qcyIsInNlcnZpY2VzL3Rlc3RTZXJ2aWNlLmpzIiwiaG9tZS9jb250cm9sbGVycy9ob21lQ29udHJvbGxlci5qcyIsInBsYXlsaXN0cy9jb250cm9sbGVycy9wbGF5bGlzdENvbnRyb2xsZXIuanMiLCJwbGF5bGlzdHMvY29udHJvbGxlcnMvcGxheWxpc3RzQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBuYW1lIG1vZHVsZXNcbiAqIEBkZXNjcmlwdGlvbiBBbmd1bGFyIGFwcGxpY2F0aW9uIOuqqOuTiCDrpqzsiqTtirhcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIG1vZHVsZXMgPSBbXG4gICdpb25pYydcbl07XG4vKipcbiAqIEBuZ2RvYyBhcHBcbiAqIEBuYW1lIGFwcFxuICogQGRlc2NyaXB0aW9uIEFuZ3VsYXIgbWFpbiBhcHAg66qo65OIXG4gKi9cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBtb2R1bGVzKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEBtZW1iZXJvZiBhcHBcbiAqIEBuZ2RvYyBjb25maWdcbiAqIEBuYW1lIGNvbmZpZ1xuICogQGRlc2NyaXB0aW9uIHJvdXRlciDrsI8g6riw7YOAIGFuZ3VsYXIgY29uZmlndXJhdGlvblxuICogQHBhcmFtIHtzZXJ2aWNlfSAkc3RhdGVQcm92aWRlciBhbmd1bGFyLXVpLXJvdXRlciAkc3RhdGVQcm92aWRlclxuICogQHBhcmFtIHtzZXJ2aWNlfSAkdXJsUm91dGVyUHJvdmlkZXIgYW5ndWxhci11aS1yb3V0ZXIgJHVybFJvdXRlclByb3ZpZGVyXG4gKi9cbmFwcC5jb25maWcoW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIiwgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FwcC9wbGF5bGlzdHMnKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnYXBwJywge1xuICAgICAgdXJsIDogJy9hcHAnLFxuICAgICAgYWJzdHJhY3QgOiB0cnVlLFxuICAgICAgdGVtcGxhdGVVcmwgOiAncGFnZXMvaG9tZS92aWV3cy9tZW51Lmh0bWwnLFxuICAgICAgY29udHJvbGxlciA6ICdob21lQ29udHJvbGxlciBhcyBob21lJ1xuICAgIH0pXG4gICAgLnN0YXRlKCdhcHAuc2VhcmNoJywge1xuICAgICAgdXJsIDogJy9zZWFyY2gnLFxuICAgICAgdmlld3MgOiB7XG4gICAgICAgICdtZW51Q29udGVudCcgOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmwgOiAncGFnZXMvc2VhcmNoL3ZpZXdzL3NlYXJjaC5odG1sJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC5icm93c2UnLCB7XG4gICAgICB1cmwgOiAnL2Jyb3dzZScsXG4gICAgICB2aWV3cyA6IHtcbiAgICAgICAgJ21lbnVDb250ZW50JyA6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybCA6ICdwYWdlcy9icm93c2Uvdmlld3MvYnJvd3NlLmh0bWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnYXBwLnBsYXlsaXN0cycsIHtcbiAgICAgIHVybCA6ICcvcGxheWxpc3RzJyxcbiAgICAgIHZpZXdzIDoge1xuICAgICAgICAnbWVudUNvbnRlbnQnIDoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsIDogJ3BhZ2VzL3BsYXlsaXN0cy92aWV3cy9wbGF5bGlzdHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlciA6ICdwbGF5bGlzdHNDb250cm9sbGVyJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2FwcC5zaW5nbGUnLCB7XG4gICAgICB1cmwgOiAnL3BsYXlsaXN0cy86cGxheWxpc3RJZCcsXG4gICAgICB2aWV3cyA6IHtcbiAgICAgICAgJ21lbnVDb250ZW50JyA6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybCA6ICdwYWdlcy9wbGF5bGlzdHMvdmlld3MvcGxheWxpc3QuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlciA6ICdwbGF5bGlzdENvbnRyb2xsZXInXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbn1dKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbWVtYmVyb2YgYXBwXG4gKiBAbmdkb2MgcnVuXG4gKiBAbmFtZSBydW5cbiAqIEBkZXNjcmlwdGlvbiBBbmd1bGFyIG9uIHJ1biBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0ge1NlcnZpY2V9ICRpb25pY1BsYXRmb3JtIGlvbmljIHBsYXRmb3JtIHNlcnZpY2VcbiAqL1xuYXBwLnJ1bihbXCIkaW9uaWNQbGF0Zm9ybVwiLCBmdW5jdGlvbigkaW9uaWNQbGF0Zm9ybSkge1xuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBIaWRlIHRoZSBhY2Nlc3NvcnkgYmFyIGJ5IGRlZmF1bHQgKHJlbW92ZSB0aGlzIHRvIHNob3cgdGhlIGFjY2Vzc29yeSBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgLy8gZm9yIGZvcm0gaW5wdXRzKS5cbiAgICAvLyBUaGUgcmVhc29uIHdlIGRlZmF1bHQgdGhpcyB0byBoaWRkZW4gaXMgdGhhdCBuYXRpdmUgYXBwcyBkb24ndCB1c3VhbGx5IHNob3cgYW4gYWNjZXNzb3J5IGJhciwgYXRcbiAgICAvLyBsZWFzdCBvbiBpT1MuIEl0J3MgYSBkZWFkIGdpdmVhd2F5IHRoYXQgYW4gYXBwIGlzIHVzaW5nIGEgV2ViIFZpZXcuIEhvd2V2ZXIsIGl0J3Mgc29tZXRpbWVzXG4gICAgLy8gdXNlZnVsIGVzcGVjaWFsbHkgd2l0aCBmb3JtcywgdGhvdWdoIHdlIHdvdWxkIHByZWZlciBnaXZpbmcgdGhlIHVzZXIgYSBsaXR0bGUgbW9yZSByb29tXG4gICAgLy8gdG8gaW50ZXJhY3Qgd2l0aCB0aGUgYXBwLlxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyKHRydWUpO1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmRpc2FibGVTY3JvbGwodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBTZXQgdGhlIHN0YXR1c2JhciB0byB1c2UgdGhlIGRlZmF1bHQgc3R5bGUsIHR3ZWFrIHRoaXMgdG9cbiAgICAgIC8vIHJlbW92ZSB0aGUgc3RhdHVzIGJhciBvbiBpT1Mgb3IgY2hhbmdlIGl0IHRvIHVzZSB3aGl0ZSBpbnN0ZWFkIG9mIGRhcmsgY29sb3JzLlxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XSk7XG4iLCIvKipcbiAqIHRlc3Qgc2VydmljZVxuICogQG5nZG9jIHNlcnZpY2VcbiAqIEBuYW1lIHRlc3RTZXJ2aWNlXG4gKi9cbnZhciB0ZXN0U2VydmljZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRUZXN0IDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICd0ZXN0JztcbiAgICB9XG4gIH1cbn07XG5cbmFwcC5zZXJ2aWNlKCd0ZXN0U2VydmljZScsIHRlc3RTZXJ2aWNlKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbWVtYmVyb2YgYXBwXG4gKiBAbmdkb2MgY29udHJvbGxlclxuICogQG5hbWUgaG9tZUNvbnRyb2xsZXJcbiAqIEBkZXNjcmlwdGlvbiBob21lIHBhZ2UgY29udHJvbGxlclxuICovXG5mdW5jdGlvbiBob21lQ29udHJvbGxlcigkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCkge1xuICAvLyBXaXRoIHRoZSBuZXcgdmlldyBjYWNoaW5nIGluIElvbmljLCBDb250cm9sbGVycyBhcmUgb25seSBjYWxsZWRcbiAgLy8gd2hlbiB0aGV5IGFyZSByZWNyZWF0ZWQgb3Igb24gYXBwIHN0YXJ0LCBpbnN0ZWFkIG9mIGV2ZXJ5IHBhZ2UgY2hhbmdlLlxuICAvLyBUbyBsaXN0ZW4gZm9yIHdoZW4gdGhpcyBwYWdlIGlzIGFjdGl2ZSAoZm9yIGV4YW1wbGUsIHRvIHJlZnJlc2ggZGF0YSksXG4gIC8vIGxpc3RlbiBmb3IgdGhlICRpb25pY1ZpZXcuZW50ZXIgZXZlbnQ6XG4gIC8vJHNjb3BlLiRvbignJGlvbmljVmlldy5lbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgLy99KTtcblxuICAvLyBGb3JtIGRhdGEgZm9yIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW5EYXRhID0ge307XG5cbiAgLy8gQ3JlYXRlIHRoZSBsb2dpbiBtb2RhbCB0aGF0IHdlIHdpbGwgdXNlIGxhdGVyXG4gICRpb25pY01vZGFsLmZyb21UZW1wbGF0ZVVybCgncGFnZXMvaG9tZS92aWV3cy9sb2dpbi5odG1sJywge1xuICAgIHNjb3BlOiAkc2NvcGVcbiAgfSkudGhlbihmdW5jdGlvbihtb2RhbCkge1xuICAgICRzY29wZS5tb2RhbCA9IG1vZGFsO1xuICB9KTtcblxuICAvLyBUcmlnZ2VyZWQgaW4gdGhlIGxvZ2luIG1vZGFsIHRvIGNsb3NlIGl0XG4gICRzY29wZS5jbG9zZUxvZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLm1vZGFsLmhpZGUoKTtcbiAgfTtcblxuICAvLyBPcGVuIHRoZSBsb2dpbiBtb2RhbFxuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUubW9kYWwuc2hvdygpO1xuICB9O1xuXG4gIC8vIFBlcmZvcm0gdGhlIGxvZ2luIGFjdGlvbiB3aGVuIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIGxvZ2luIGZvcm1cbiAgJHNjb3BlLmRvTG9naW4gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnRG9pbmcgbG9naW4nLCAkc2NvcGUubG9naW5EYXRhKTtcblxuICAgIC8vIFNpbXVsYXRlIGEgbG9naW4gZGVsYXkuIFJlbW92ZSB0aGlzIGFuZCByZXBsYWNlIHdpdGggeW91ciBsb2dpblxuICAgIC8vIGNvZGUgaWYgdXNpbmcgYSBsb2dpbiBzeXN0ZW1cbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5jbG9zZUxvZ2luKCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG59O1xuXG5hcHAuY29udHJvbGxlcignaG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckaW9uaWNNb2RhbCcsICckdGltZW91dCcsIGhvbWVDb250cm9sbGVyXSlcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbWVtYmVyb2YgYXBwXG4gKiBAbmdkb2MgY29udHJvbGxlclxuICogQG5hbWUgcGxheWxpc3RDb250cm9sbGVyXG4gKiBAZGVzY3JpcHRpb24gcGxheSBzaW5nbGUgY29udHJvbGxlclxuICovXG5mdW5jdGlvbiBwbGF5bGlzdENvbnRyb2xsZXIoKSB7XG5cbn1cblxuYXBwLmNvbnRyb2xsZXIoJ3BsYXlsaXN0Q29udHJvbGxlcicsIFtwbGF5bGlzdENvbnRyb2xsZXJdKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbWVtYmVyb2YgYXBwXG4gKiBAbmdkb2MgY29udHJvbGxlclxuICogQG5hbWUgcGxheWxpc3RzQ29udHJvbGxlclxuICogQGRlc2NyaXB0aW9uIHBsYXkgbGlzdHMgY29udHJvbGxlclxuICogQHJldHVybiB7U2VydmljZX0gJHNjb3BlIEFuZ3VsYXIgc2NvcGUgc2VydmljZVxuICovXG5mdW5jdGlvbiBwbGF5bGlzdHNDb250cm9sbGVyKCRzY29wZSkge1xuICAvKipcbiAgICogQG1lbWJlcm9mIHBsYXlsaXN0c0NvbnRyb2xsZXJcbiAgICogQG5hbWUgcGxheUxpc3RzXG4gICAqIEBkZXNjcmlwdGlvbiBwbGF5IGxpc3RzIGFycmF5XG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gICRzY29wZS5wbGF5bGlzdHMgPSBbXG4gICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgeyB0aXRsZTogJ0NoaWxsJywgaWQ6IDIgfSxcbiAgICB7IHRpdGxlOiAnRHVic3RlcCcsIGlkOiAzIH0sXG4gICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICB7IHRpdGxlOiAnUmFwJywgaWQ6IDUgfSxcbiAgICB7IHRpdGxlOiAnQ293YmVsbCcsIGlkOiA2IH1cbiAgXTtcbn07XG5cbmFwcC5jb250cm9sbGVyKCdwbGF5bGlzdHNDb250cm9sbGVyJywgWyckc2NvcGUnLCBwbGF5bGlzdHNDb250cm9sbGVyXSk7XG4iXX0=
