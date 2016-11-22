var request = require('request');

var newyorktimes = {
  listArticles: function() {
    return new Promise(function(resolve, reject) {
      request.get({
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: {
          'api-key': process.env.article_search_key
        },
      }, function(err, response, body) {
        body = JSON.parse(body);
        var articles = body.response.docs;
        var formattedArticles = articles.map(function(article) {
          return {
            title: article.headline.main,
            author: article.byline.original,
            publishedAt: article.pub_date
          };
        });
        resolve(formattedArticles);
      })
    });
  }
};

module.exports = newyorktimes;
