'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/greeting', {templateUrl: 'greeting.html'})
  .when('/menu', {templateUrl: 'menu.html'})
  .when('/intro', {templateUrl: 'intro.html'})
  .when('/specific', {templateUrl: 'specific.html'})
  .when('/measurable', {templateUrl: 'measurable.html'})
  .when('/achievable', {templateUrl: 'achievable.html'})
  .when('/relevant', {templateUrl: 'relevant.html'})
  .when('/time', {templateUrl: 'time.html'})
  .when('/conclusion', {templateUrl: 'conclusion.html'})
  .when('/rome', {templateUrl: 'rome.html'})
  .when('/checklist', {templateUrl: 'checklist.html'})
  .when('/end1', {templateUrl: 'end1.html'})
  .otherwise({redirectTo: '/greeting'})

  console.log('asdasd')
}]);

app.controller('MainCtrl', function ($scope) {
	$scope.goTo = function (url) {
		window.location.href = url
	} 
})