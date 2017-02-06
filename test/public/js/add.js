var app = angular.module('add', []);
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
                    room_id:$scope.room,
                    month:month[1]+'/'+month[0],
                    record:"",
                    water_unit:$scope.w_unit,
                    water_ppu:$scope.w_ppu,
                    water_total:$scope.w_total,
                    elect_unit:$scope.e_unit,
                    elect_ppu:$scope.e_ppu,
                    elect_total:$scope.e_total
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
