angular.module('myApp', ['ngAnimate'])
	.controller('myCtrl', function($scope, $http, $q) {
		$scope.searchTerm =""
		
		$scope.submit = function(searchTerm){
			console.log("submit button works")
			$scope.submitted=true
			sendData()
			
		};

		function sendData(){
			var url = "https://api.flickr.com/services/rest"
			var params = {
			    method: 'flickr.photos.search',
			    api_key: "6ea9f31147623c41fa447e5785994cea",
			    tags: $scope.searchTerm,
			    format: 'json',
			    nojsoncallback: 1
			}
			$http({url, params})

			.then(function(response){
				console.log(response.data.photos.photo),
				$scope.length=response.data.photos.photo.length;
				$scope.submitted=false
			});


		};









    });
