import React from 'react';
import './NewsImage.css';
import News from '../News/News';


function NewsImage({ card, viewCardDetails}) {

    const { title, image_url } = card

   return (
//MAKING A NewsImage CARD WITH THESE KEY VALUES
        <div className='card' onClick={viewCardDetails}>
            <img src={image_url} alt='News Image' className='news-image'/>
            <h3 className='title'>{title}</h3>
        </div>

   )

}

export default NewsImage