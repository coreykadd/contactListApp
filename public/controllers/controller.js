//controller.js

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',[
    '$scope',
    '$http',
    function($scope, $http){
        console.log('Hello World');

        person1 = {
            name: 'Tim',
            email: 'email@email.com',
            number: '0851290182'
        };

        person2 = {
            name: 'John',
            email: 'random@email.ie',
            number: '0872290193'
        };

        person3 = {
            name: 'Sarah',
            email: 'yeah@email.com',
            number: '0891044791'
        };

        var contactList = [person1, person2, person3];

        $scope.contactList = contactList;
    }
]);