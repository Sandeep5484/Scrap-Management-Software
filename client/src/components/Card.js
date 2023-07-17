import React from 'react';
import "../Card.css";


const Card = (props) => {
  return (
        <>
          { 
          props.details.map((value,index)=>(

        <div className='card-container' key={index}>
        <div className='image-container'>
          <img src={value.img}  alt='a'/>
        </div>
        <div className='card-content'>
          <h3>{value.title}</h3>
        <p>  {value.description}</p>
        </div>

        <div className='btn'>
          <button>
            <a href='../pages/ScrapDetailPage'>View more</a>
          </button>
        </div>

        </div>

    ))};
    </>
  );
 };

export default Card
