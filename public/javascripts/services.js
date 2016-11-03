app.service(`postsService`, function($http) {
  return {
    getPosts: () => {
      return $http.get(`/api/posts`).then(results => {
        console.log(`Results from API:`, results)
        return results
      })
    }
    newPost: (newPostObj) => {
      console.log(`newPostObj in services:`, newPostObj);
      return $http.post(`/api/newpost`, newPostObj)
        .then(results => {
          console.log(results);
      })
    }
  }
})
