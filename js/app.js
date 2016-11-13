// 'use strict';


    var app = angular.module('myApp', []);
    var some = [];

    app.controller('AdviserController', function($scope, $http) {
        var film = this;
        film.items = [];
        film.items[0] = "Test";
        var rand = 1 + Math.floor(Math.random() * (100 + 1 - 1));
        var film_link = "https://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/" + rand;
        $scope.filmScope = [];
        // that.item;
         $http.get( film_link )
            .then(function(responce){
                $scope.film = responce.data;
                console.log(responce.data);
            });
    });
    // app.controller('MainCntl', function($scope, $http) {

    // });
// });
