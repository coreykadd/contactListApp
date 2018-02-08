//controller.js

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',[
    '$scope',
    '$http',
    function($scope, $http){
        console.log('Hello World');

        $http.get('/contactList')
        .then(function(res){
            console.log('Recieved data');
            $scope.contactList = res.data;
        });
    }
]);