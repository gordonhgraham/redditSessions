
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({title:'post1', body:'This is the post1 body', imageURL: 'https://unsplash.it/175/174', voteCount: 8 }),
        knex('posts').insert({title:'post2', body:'This is the post2 body', imageURL: 'https://unsplash.it/175/175', voteCount: 4 }),
        knex('posts').insert({title:'post3', body:'This is the post3 body', imageURL: 'https://unsplash.it/175/176', voteCount: 2 })
      ])
    })
}
