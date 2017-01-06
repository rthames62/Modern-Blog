lifeblueBlog.controller('mainCtrl', function($scope, $stateParams, $timeout, mainService){

  $scope.categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"];

  $scope.filterCategory = function(category){
    $scope.posts = mainService.filterCategory(category);
  }

  $scope.showAllPosts = function(){
    $scope.posts = mainService.showAllPosts();
  }

  $scope.sortByViews = function(){
    $scope.mostViews = "active";
    $scope.mostComments = "";
    $scope.mostShares = "";
    $scope.posts = mainService.sortByViews();
  }

  $scope.sortByComments = function(){
    $scope.mostViews = "";
    $scope.mostComments = "active";
    $scope.mostShares = "";
    $scope.posts = mainService.sortByComments();
  }

  $scope.sortByShares = function(){
    $scope.mostViews = "";
    $scope.mostComments = "";
    $scope.mostShares = "active";
    $scope.posts = mainService.sortByShares();
  }

  $scope.posts = mainService.posts;

})
