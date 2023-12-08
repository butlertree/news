import React from 'react';
import './NewsDetail.css';



function NewsDetail({ selectedCard, goBackToMain}){

const { title, description, image_url, url, snippet } = selectedCard

    return (
    <div className='card-detail'>
        <div className='card-content'>
            <h2 className='title'>{title}</h2>
            <img src={image_url} alt='News Image' className='news-image'/>
        </div> 
        <div className='description'>
            <p>{description}</p>
            <a href={url}>Visit News Site</a>
        </div>
        <div>
            <button onClick={goBackToMain}> Back To Main</button>
        </div>       
    </div>

    )

}

export default NewsDetail