
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

myModule.controller('MainCtrl', function () {

    /* 
        It is better to store a reference to the top level 'this' object in case we need it later.
        It is also better to name this the same name we declare the controller-as in the view.
        This makes it easier to read and connect the dots as you jump between the HTML and JS.
     */
    var main = this;

    main.stories = [
        {
            title: 'First Story',
            description: 'Our first story.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Second Story',
            description: 'Do something.',
            criteria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Another story',
            description: 'Just one more.',
            criteria: 'Criteria pending.',
            status: 'Code Review',
            type: 'Enhancement',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        }
    ];

    main.createStory = function() {
        main.stories.push({
            title: 'New story',
            description: 'Desc pending',
            criteria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Pending',
            assignee: 'Pending' 
        });
    };
    
});


myModule.directive('story', function () { });