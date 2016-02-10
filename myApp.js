angular.module('myApp', ['ngAnimate'])
	.controller('myCtrl', function($scope, $http, $q) {
		$scope.searchTerm ="";
		$scope.success=false;
		
		$scope.submit = function(){
			$scope.submitted=true;
			
			sendData().then(
				function(){
					$scope.term=$scope.searchTerm
					$scope.searchTerm ="";
				})
			
		};

		function sendData(){
			var defer = $q.defer();
			var url = "https://api.flickr.com/services/rest"
			var params = {
			    method: 'flickr.photos.search',
			    api_key: "6ea9f31147623c41fa447e5785994cea",
			    tags: $scope.searchTerm,
			    format: 'json',
			    nojsoncallback: 1
			}
			$http({url, params}).then(
				function(response){
				$scope.response=response.data.photos.photo;
				$scope.length=response.data.photos.photo.length;
				$scope.submitted=false;
				$scope.success=true;
				defer.resolve();
			},
			function(error){
				alert("error")
				defer.reject()
			});

			return defer.promise;

		};









    });
