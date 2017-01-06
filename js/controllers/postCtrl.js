lifeblueBlog.controller('postCtrl', function($scope, $stateParams, $timeout, mainService){

  $scope.getPost = function(){
      // $timeout(function(){
        $scope.post = mainService.getPost($stateParams.id);
        console.log($scope.post);
        return $scope.post;
      // }, 50)
  }

  $scope.getPost();

})
