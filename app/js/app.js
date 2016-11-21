var app = angular.module('myApp', []);


var getFilmLink = function() {
    var rand = 1 + Math.floor(Math.random() * (100 + 1 - 1));
    var film_link = "https://134.249.116.199:3000/api/a96ed253-fb2c-4ff6-9e37-ff1c5935b7ca/movies/" + rand;
    return film_link;
}

app.controller('AdviserController', function($scope, $http) {
        $scope.films = [];
    var requestFilmJSON = function() {
        console.log("click"); 

        // that.item;
         $http.get( getFilmLink() )
            .then(function(responce){
                $scope.films.push(responce.data);
                console.log($scope.films); 
            });
    }
    requestFilmJSON();
    this.getNewFilm = function() {
        requestFilmJSON();
    }
});
