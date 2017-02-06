var app = angular.module('home', []);
app.controller('hCtrl', function($scope) {
    $scope.w3_open = function(){
        console.log('click')
        document.getElementById("main").style.marginLeft = "50%";
        document.getElementById("sidebar").style.width = "50%";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }
    $scope.w3_close = function(){
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
    }
});