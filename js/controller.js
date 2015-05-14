app.controller('PostsController', function($scope, FirebaseService) {
	$scope.getPosts = function() {
		FirebaseService.getPost()
			.then(function(reponse) {
				$scope.posts = reponse.data
				console.log($scope.posts)
		})
	}	
	
	$scope.getPosts();

		$scope.addPost = function () { debugger
			// console.log($scope.newPost)
			var aNewPost = $scope.newPost;
			FirebaseService.addPost(aNewPost)
				.then(function() {
					$scope.getPosts()			
				//do Something
			})
		}
})