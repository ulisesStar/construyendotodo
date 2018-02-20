var app = angular.module('myapp');

app.controller('prospectoCtrl', function($scope, alertas, $rootScope, $http, mdDialog, $mdDialog, Prospecto) {
    // $scope.subsection = 'prospecto';


		Prospecto.obtener().then(res => {
		$scope.prospectos = res.data;
		console.log($scope.prospectos)
		$scope.$digest();
	})

});
