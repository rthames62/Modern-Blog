const lifeblueBlog = angular.module('lifeblueBlog', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        templateUrl : './views/home.html',
        url : '/'
      })
      .state('blog', {
        templateUrl : './views/single.html',
        url : '/blog/:id',
        controller : 'postCtrl'
      })
  })
