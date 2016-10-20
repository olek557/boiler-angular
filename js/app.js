'use strict';

var app = angular.module('myApp', []);
var some = [];

app.controller('AdviserController', function($scope, $http) {
    $scope.items = {};
    this.advise = $scope.items;
    var advise = this.advise;
    $scope.getItems = function() {
     $http.get( "http://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/4")
        .success(function(data){
            $scope.items.item = data;
            $scope.items.item.poster_url = "images/poster_database/" + $scope.items.item.id + ".jpg";
        });
    }

    $scope.getItems();
    console.log(advise); 


});

app.controller('MainCntl', function($scope, $http) {

});
