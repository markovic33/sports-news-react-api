import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './slick-theme.css';
import './style.css';


const FetchData = ({ cat }) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        await axios 
            .get(
              cat ? `https://newsapi.org/v2/everything?q=${cat}&sortBy=publishedAt&apiKey=3f769ce9977b4903b99ce619c6bc9843`
                  : 'https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=3f769ce9977b4903b99ce619c6bc9843'
            )
            .then((res) => setData(res.data.articles));
    }
    useEffect(() => {
        fetchData();
    }, [cat])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    
  return (
    <div style={{Width: "100%",justifyContent:"center", alignItems:"center", textAlign:"center", padding:"30px", height: "100vh", backgroundColor:"lightgrey"}}>
        <h2 style={{textTransform: "uppercase", textAlign: "start"}}>
            TOP {cat} HEADLINES
        </h2>
        
          <div className="news_container">
          <Slider {...settings}>
                  {data ?
                  data.map((items) => ( 
                      <div className='card'>
                          <div className="card_top">
                              <h3>{items.title}</h3>
                              <img src={items.urlToImage} alt="/" />
                          </div>
                          <div className="card_bottom">
                              <p>{items.description}</p>
                              <a href={items.url}>View More</a>
                          </div>
                      </div>
                  )) : "LOADING..."}
              </Slider>
          </div>
        
    </div>
  )
}

export default FetchData