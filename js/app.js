// (function() {
 
// 	var app = angular.module('adviser', []);


// 	app.controller('AdviserController', function($http){
// 		var films = this;
// 		films.film = [];
// 		$http.get('http://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/4').success(function() {
// 			films.film = data;
// 		});
// 	});
// 	var film = {
// 		id: 001,
// 		name: 'Fight Club',
// 		rate: 8.5,
// 		descr: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.",
// 		director: "David Fincher",
// 		poster_src: "https://images-na.ssl-images-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
// 		trailer_src: "https://youtu.be/SUXWAEX2jlg"
// 	}
// })();


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
        });
    }

    $scope.getItems();
    console.log(advise); 


});

app.controller('MainCntl', function($scope, $http) {
    // $scope.items = {};
    // var copy;
    // $scope.getItems = function() {
    //  $http.get( "http://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/4")
    //     .success(function(data){
    //         $scope.items.item = data;
    //         copy = Object.assign({}, $scope.items.item);
    //             console.log(copy); 
    //     });
    // }
    // $scope.getItems();
    // console.log(copy);
    // this.advise = $scope.items;
});



    // function AdviserController($scope, $http) {
    //     $scope.items = []

    //     $scope.getItems = function() {
    //      $http({method : 'GET',url : 'http://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/4', headers: { 'X-Parse-Application-Id':'XXXXXXXXXXXXX', 'X-Parse-REST-API-Key':'YYYYYYYYYYYYY'}})
    //         .success(function(data, status) {
    //             $scope.items = data;
    //          })
    //         .error(function(data, status) {
    //             alert("Error");
    //         })
    //     }
    // }

