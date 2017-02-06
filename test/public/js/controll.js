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

app.controller('aCtrl', function($scope,$http) {
    $scope.w_unit = 0;
    $scope.w_ppu = 0;
    $scope.w_total = 0;

    $scope.e_unit = 0;
    $scope.e_ppu = 0;
    $scope.e_total = 0;

    $scope.save = function(){
            var month = $('#month').val().split("-")
         $http({
                method: 'POST',
                url: '/add_item',
                data: {
                    w_unit:$scope.w_unit,
                    w_ppu:$scope.w_ppu,
                    w_total:$scope.w_total,
                    e_unit:$scope.e_unit,
                    e_ppu:$scope.e_ppu,
                    e_total:$scope.e_total,
                    month:month[1]+'-'+month[0]
                }
            })
            .then(function(response) {
                console.log(response)
            }, function(err) {
                console.log(err)
            });
    };


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


app.controller('lCtrl', function($scope,$http) {
    $http({
            method: 'POST',
            url: '/list_room',
        })
        .then(function(response) {
            //console.log(response);
            $scope.list_room = response.data;
        }, function(err) {
             console.log(err);
    });

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

app.controller('lCtrl', function($scope,$http) {
    $http({
            method: 'POST',
            url: '/detail',
        })
        .then(function(response) {
            console.log(response);
            //$scope.detail = response.data;
        }, function(err) {
             console.log(err);
    });
});