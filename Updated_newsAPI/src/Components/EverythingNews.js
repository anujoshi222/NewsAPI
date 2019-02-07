import React, { Component } from 'react'
import axios from 'axios'
const apiKey = '25d172f845ff4c77a0f1a6e59de262f0';
class EverythingNews extends Component{
    state={
        articles:[]
    }

    componentWillMount(){
        this.getEverythingArticles(this.props.default)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
          this.setState({ url: `https://newsapi.org/v2/everything?q=${nextProps.default}&language=en&apiKey=${apiKey}` });
          this.getEverythingArticles(nextProps.default);
        }
      }
    
    getEverythingArticles(search){
        axios
          .get(`  https://newsapi.org/v2/everything?q=${search}&language=en&apiKey=${apiKey}`)
          .then(response => {
            console.log(response)
            const articles = response.data.articles;
            this.setState({ articles: articles });
          })
          .catch(error => {
            console.log(error);
          });

    }
      render() {
        return (
          <div className="cardsContainer">
            {this.state.articles.map((news, i) => {
              return (
                <div className="card" key={i}>
                  <div className="content">
                    <h3>
                      <a href={news.url}>
                        {news.title}
                      </a>
                    </h3>
                    <p>{news.description}</p>
                    <div className="author">
                      <p>
                        By <i>{news.author ? news.author : this.props.default}</i>
                      </p>
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
    

export default EverythingNews;
