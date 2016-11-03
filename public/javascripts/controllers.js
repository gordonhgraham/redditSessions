app.controller('main', function($scope, postsService){

  $scope.newPostObj = {}
    $scope.postFormBool = false;
    $scope.sortType = '-voteCount'
    $scope.sortDisplay = "Votes"

    // $scope.newPost = function(obj) {
      // console.log(obj)
      postsService.newPost(obj).then(function(results) {
        $scope.newPostObj = {}
        $scope.postFormBool = false
        $scope.postForm.$setPristine()
      })
    // }

  postsService.getPosts().then(results => {
      $scope.arr = results
  })


  $scope.sortType = '-voteCount'
  $scope.sortDisplay = "Votes"

  $scope.increment = function(post){
    post.voteCount++
  }

  $scope.decrement = function(post){
    post.voteCount--
  }

  $scope.toggleComments = function(post){
    if (post.showCommentsBool){
      post.showCommentsBool = false
    } else {
      post.showCommentsBool = true
    }
  }



  $scope.sortBy = function(input){
    console.log('sortBy clicked')
    $scope.sortType = input
    if (input == '-voteCount') {
      $scope.sortDisplay = 'Votes'
    } else {
      $scope.sortDisplay = 'Title'
    }
  }


})
