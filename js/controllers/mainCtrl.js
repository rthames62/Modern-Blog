lifeblueBlog.controller('mainCtrl', function($scope, mainService){

  $scope.categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"];

  $scope.posts = mainService.posts;

})
