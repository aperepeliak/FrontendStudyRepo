
// Creating a module called Angello and assigning it to a variable.
// The second parameter is an array that accepts other sub-modules for additional functionality if neccessary.
var myModule = angular.module('Angello', []);

/* 
    Best practice - devide features into sub-modules and then inject them into the main app module.
    By doing this it is easier to move a module and test it.
 */

// Defining neccessary components for the application on the myModule property.
myModule.factory('AngelloHelper', function () { });
myModule.service('AngelloModel', function () { });
myModule.controller('MainCtrl', function () { });
myModule.directive('story', function () { });