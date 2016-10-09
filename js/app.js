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

angular.module('myApp', [])
  .controller('AdviserController', function($scope, $http){
    $scope.details;
    function fetch(){
      $http.get("http://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/4")
      .then(function(response){ $scope.details = response.data; });
      console.log($scope.details);
    }
    fetch();
  });