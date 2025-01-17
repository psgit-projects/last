
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard({category}) {
  
   const [articles,setArticles]=useState([]);
  useEffect(() => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=17c4f33610954c80a0b6e59cfe8264b5`;
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setArticles(data.articles))
    .catch(error => {
      console.error("Error fetching data: ", error);
    });
}, [category]);



  return (
    <div>
      <br></br>
   <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
   {articles.map((news,index)=>{
    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
   })}
    </div>
  );
}

export default NewsBoard;
