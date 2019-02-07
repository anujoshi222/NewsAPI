import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '25d172f845ff4c77a0f1a6e59de262f0';
class CountryNews extends Component{
    state={
        articles:[]
    }

    componentWillMount(){
        this.getArticles(this.props.default)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
          this.setState({ url: `https://newsapi.org/v2/top-headlines?country=${nextProps.default}&apiKey=${apiKey}` });
          this.getArticles(nextProps.default);
        }
      }

    getArticles(countryName) {
        
        axios
          .get(`https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=${apiKey}`)
          .then(response => {
            const articles = response.data.articles;
            this.setState({ articles: articles });
          })
          .catch(error => {
            console.log(error);
          });
      }

      render() {
        return (
          <div className="articles">
            {this.state.articles.map((news, i) => {
              return (
                <div className="news_articles" key={i}>
                  <div className>
                    <h2>
                      <a href={news.url}>
                        {news.title}
                      </a>
                    </h2>
                    <p>{news.content}</p>
                    <div className="meta">
                      <blockquote>
                        By <i>{news.author ? news.author : this.props.default}</i>
                      </blockquote>
                    </div>
                  </div>
                  <div className="image">
                    <img src={news.urlToImage} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        );
      }
    }
    

export default CountryNews;
