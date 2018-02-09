//controller.js

var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl',[
    '$scope',
    '$http',
    function($scope, $http){
        console.log('Hello World');

        var refresh = function() {
            $http.get('/contactList')
            .then(function(res){
                console.log('Recieved data');
                $scope.contactList = res.data;
                $scope.contact = {};
            });
        };

        refresh();

        $scope.addContact = function(){
            console.log($scope.contact);
            $http.post('/contactList', $scope.contact)
            .then(function(res){
                console.log(res);
                refresh();
            });
        };
    }
]);