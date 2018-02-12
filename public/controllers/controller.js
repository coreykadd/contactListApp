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
            if($scope.contact._id !== null)
                $scope.contact._id = null;

            if($scope.contact.name == null) {
                alert('Please enter valid name');
                return;
            }
            else if($scope.contact.email == null) {
                alert('Please enter a valid email');
                return;
            }
            else if($scope.contact.number == null) {
                alert('Plase enter a valid number');
                return;
            }
            else {
                alert('Contact Added');
            }

            $http.post('/contactList', $scope.contact)
            .then(function(res){
                console.log('Added contact');
                console.log(res);
                refresh();
            });
        };

        $scope.remove = function(id){
            console.log(id);
            $http.delete('/contactList/' + id)
            .then(function(res){
                console.log('deleted contact');
                console.log(res);
                refresh();
            });
        };

        $scope.edit = function(id){
            console.log(id);
            $http.get('/contactList/' + id)
            .then(function(res){
                $scope.contact = res.data;
            });
        };

        $scope.update = function(){
            console.log($scope.contact._id);
            if($scope.contact.name == null) {
                alert('Please enter valid name');
                return;
            }
            else if($scope.contact.email == null) {
                alert('Please enter a valid email');
                return;
            }
            else if($scope.contact.number == null) {
                alert('Plase enter a valid number');
                return;
            }
            else {
                alert('Contact Updated');
            }

            $http.put('/contactList/' + $scope.contact._id, $scope.contact)
            .then(function(res){
                console.log('edited contact');
                console.log(res);
                refresh();
            });
        };

        //Sorting
        $scope.sortNameAsc = function(){
            $scope.sortOrder = '+name';
        };

        $scope.sortNameDesc = function(){
            $scope.sortOrder = '-name';
        };
    }
]);