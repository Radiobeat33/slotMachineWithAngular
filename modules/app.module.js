(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMaterial',
            'ngAudio',
            'ngAnimate'
        ])

        .config(function($stateProvider, $urlRouterProvider) {

          // For any unmatched url, redirect to mainState
          $urlRouterProvider.otherwise("/");

          // setting up the states for routing
          $stateProvider
            .state('mainState', {
              url: "/",
              templateUrl: "views/slotView.html"
            });
        });
})();