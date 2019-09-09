const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('aa6409b0d34646869dbba06155bad31e');


export function getTheNews(){
    var d = new Date();
    var oneMonthBefore= d.setMonth(d.getMonth() - 1);
    console.log(d.toLocaleDateString());
    return newsapi.v2.everything({
      domains: 'wsj.com, nytimes.com',
      from: oneMonthBefore,
      to: new Date(),
      language: 'en',
      sortBy: 'relevancy',
      pageSize: 10,
      page: 5,
      sortBy: 'publishedAt',
    }).then(response => {
      let result = response.articles
      let resultArray = []
      result.forEach(function(element){
        let { title, description, urlToImage,publishedAt, url} = element
        let { name } = element.source
        resultArray.push({name, title, description, urlToImage, publishedAt, url})
      })
      return resultArray;
    })
  }
  