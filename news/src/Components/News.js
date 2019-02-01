import React from 'react'

const News = (props) => (
<div className='articles'>

{
    <section className="news_article">
        <img src={props.article1Img} alt=""/>
        <div className="meta"> 
           <a href={props.article1url}> <h2 className='title'>{props.article1Title}</h2></a>
            <h4 className='description'>
            {props.article1} </h4>
            <blockquote className="author">By:{props.article1Author}</blockquote>
        
        </div>
    
    </section>

}
{
    <section className="news_article">
        <img src={props.article2Img} alt=""/>
        <div className="meta"> 
        <a href={props.article2url}><h2 className='title'>{props.article2Title}</h2></a>
            <h4 className='description'>
            {props.article2} </h4>
            <blockquote className="author">By:{props.article2Author}</blockquote>

        </div>
    </section>
}
{
    <section className="news_article">
        <img src={props.article3Img} alt=""/>
        <div className="meta"> 
        <a href={props.article3url}><h2 className='title'>{props.article3Title}</h2></a>
            <h4 className='description'>
            {props.article3} </h4>
            <blockquote className="author">By: {props.article3Author}</blockquote>

        </div>
    </section>
}

</div>

)

export default News;