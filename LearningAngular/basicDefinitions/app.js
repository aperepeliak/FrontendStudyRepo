
// Creating a module called Angello and assigning it to a variable.
// The second parameter is an array that accepts other sub-modules for additional functionality if neccessary.
var myModule = angular.module('Angello', []);

/* 
    Best practice - divide features into sub-modules and then inject them into the main app module.
    By doing this it is easier to move a module and test it.
 */

// Defining neccessary components for the application on the myModule property.

// AngularJS services (AngelloHelper and AngelloModel) are for storing common state and common functionality.

myModule.factory('AngelloHelper', function () {

    // Declaring general functions that can be used in more than one place
    var buildIndex = function (source, property) {
        var tempArray = [];

        for (var i = 0, len = source.length; i < len; i++) {
            tempArray[source[i][property]] = source[i];
        }

        return tempArray;
    };

    return {
        buildIndex: buildIndex
    };
});

/*
    First we add stories to controller, but now promote that collection to service
    and make it available to to MainCtrl
 */


myModule.service('AngelloModel', function () {
    var service = this;
    stories = [
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

    service.getStories = function () {
        return stories;
    };
});

myModule.controller('MainCtrl', function (AngelloModel) {

    /*  It is better to store a reference to the top level 'this' object in case we need it later.
        It is also better to name this the same name we declare the controller-as in the view.
        This makes it easier to read and connect the dots as you jump between the HTML and JS.
     */
    var main = this;


    /* We moved stories to service
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
    */

    main.stories = AngelloModel.getStories();

    main.createStory = function () {
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

// directive is a custom component or attribute that extends HTML to do new things
// this directive returns a directive definition object(DDO) that dafines how the directive supposed to be configured.
myModule.directive('story', function () {
    return {
        scope: true,
        replace: true, // means that the template we defined replaces the element the directive was defined on
        template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
    };
});