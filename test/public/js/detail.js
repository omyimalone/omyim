var app = angular.module('detail', []);

app.controller('dCtrl', function($scope,$http) {
    $http({
                method: 'POST',
                url: '/detail',
                data: {
                    room:$('#room_num').text()
                }
            })
            .then(function(response) {
                //console.log(response.data)
                $scope.month = response.data;
            }, function(err) {
                console.log(err)
            });
    $scope.select = function(x){
        $scope.w_unit = x.water_unit
        $scope.w_ppu = x.water_ppu
        $scope.w_total = x.water_total
        $scope.e_unit = x.elect_unit
        $scope.e_ppu = x.elect_ppu
        $scope.e_total = x.elect_total
    }
});