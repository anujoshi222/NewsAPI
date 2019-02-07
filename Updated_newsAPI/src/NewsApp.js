import React, { Component } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Form from './Components/Form'
import Tabs from './Components/Tabs'
import News from './Components/News';

const API_KEY = 'fc3354dfdb2a468aa633afb348a40c6a'
class App extends Component {
  //default values
  state = {
  article1:"Although Venice was politically and economically spent by the beginning of the 18th century, in that century it nevertheless easily rivalled, if not ...",
  article1Img:"https://images.unsplash.com/photo-1523905491727-d82018a34d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  article1Author:"Unknown",
  article2url:"https://www.theartnewspaper.com/review/the-extraordinary-cultural-energy-of-18th-century-venice.com",
  article1Title:"WHAT AMERICA DRINKS EVERY DAY OF THE YEAR",
  article2Img:"https://images.unsplash.com/photo-1520874628750-bed9c0a19086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80",
  article2: "Although Venice was politically and economically spent by the beginning of the 18th century, in that century it nevertheless easily rivalled, if not ...",
  article2Author:"VinePair Staff",
  article2Title:"The extraordinary cultural energy of 18th-century Venice",
  article3: "The extraordinary cultural energy of 18th-century Venice The extraordinary cultural energy of 18th-century Venice",
  article3Img:"https://images.unsplash.com/photo-1519331582073-283f1a211a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2038&q=80",
  article3Author:"Harrison Mooney",
  article3Title:"Vancouver could see snow after all, with flurries forecast for Sunday",
  article1url:"https://vinepair.com/articles/best-drinks-holidays-year/",
  article3url:"https://vancouversun.com/news/local-news/vancouver-could-see-snow-after-all-with-flurries-forecast-for-sunday"
  }

//for country news  
getCountryNews= async(e)=>{
  let country_key=""
  let country = e.target.innerText
 

  if(country=== 'AUSTRALIA'){
    console.log(country)
    country_key="au"

  }else if(country==='CANADA'){
    country_key="ca"

  }else if(country==='INDIA'){
    country_key="in"
  }else if(country==='US'){
    country_key="us"
  }
  const url=`https://newsapi.org/v2/top-headlines?country=${country_key}&language=en&apiKey=${API_KEY}`
  const api_call = await fetch(url)
  const data = await api_call.json()
    this.setState({
      article1: data.articles[0].content,
      article1Img: data.articles[0].urlToImage,
      article1Title: data.articles[0].title,
      article1Author: data.articles[0].author,
      article1url: data.articles[0].url,
      article2: data.articles[1].content,
      article2Img: data.articles[1].urlToImage,
      article2Title: data.articles[1].title,
      article2Author: data.articles[1].author,
      article3: data.articles[2].content,
      article3Img: data.articles[2].urlToImage,
      article3Title: data.articles[2].title,
      article3Author: data.articles[2].author ,
      article2url:data.articles[1].url,
      article3url:data.articles[2].url 
    })
}

//function for search results
getNews = async (event) => {
  event.preventDefault()
  const {search} = event.target.elements
  
  const url = `
    https://newsapi.org/v2/everything?q=${search.value}&from=2018-12-31&sortBy=publishedAt&language=en&apiKey=fc3354dfdb2a468aa633afb348a40c6a`
  const api_call = await fetch(url)
  const data = await api_call.json()
  if({search} !== '404'&& {search}!=='400'){
    this.setState({
      article1: data.articles[0].description,
      article1Img: data.articles[0].urlToImage,
      article1Title: data.articles[0].title,
      article1Author: data.articles[0].author,
      article2: data.articles[1].description,
      article2Img: data.articles[1].urlToImage,
      article2Title: data.articles[1].title,
      article2Author: data.articles[1].author,
      article3: data.articles[2].description,
      article3Img: data.articles[2].urlToImage,
      article3Title: data.articles[2].title,
      article3Author: data.articles[2].author,
      article2url:data.articles[1].url,
      article3url:data.articles[2].url 
     
      })
  }else if({search}){
    this.setState({
       article1: null,
      article1Img: null,
      article1Title: null,
      article1Author:null,
      article2: null,
      article2Img: null,
      article2Title: null,
      article2Author: null,
      article3: null,
      article3Img: null,
      article3Title: null,
      article3Author: null,

      })
  }else{
   
    this.setState({
      article1: null,
      article1Img: null,
      article1Title: null,
      article1Author:null,
      article2: null,
      article2Img: null,
      article2Title: null,
      article2Author: null,
      article3: null,
      article3Img: null,
      article3Title: null,
      article3Author: null,
      article2url:null,
      article3url:null

      })
    }
}
render() {
    return (

      <div className="wrapper">
           

      <div className="main">
      <div width="100%" class="header-footer"></div>
      <h1>AJ News</h1>
      <h2 class="subtitle">Because the action never stops.....</h2>
      
         <Grid 
         container
         direction="row"
         justify="center"
         alignItems="center"
         >
         <Form 
         getNews={this.getNews}/>
        </Grid>
        <Grid >
        <Tabs
      
       getCountryNews={this.getCountryNews}
       />
        </Grid>
      <News
      article1={this.state.article1}
      article1Img={this.state.article1Img}
      article1Author={this.state.article1Author}
      article1Title={this.state.article1Title}
      article2Img={this.state.article2Img}
      article2Author={this.state.article2Author}
      article2Title={this.state.article2Title}
      article3Img={this.state.article3Img}
      article2={this.state.article2}
      article3={this.state.article3}
      article3Author={this.state.article3Author}
      article3Title={this.state.article3Title}
      article1url={this.state.article1url}
      article2url={this.state.article2url}
      article3url={this.state.article3url}
      />
        </div>
      </div>
    );
  }
}

export default App;
