import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../assets/list.json";
import Card from "./Card";

 

function Freebook() {
    const filterData = list.filter((data)=>data.category==="free");
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='max-w-screen-2xl conatainer mx-auto md:px-20 px-4 '>
        <div>
            <h1 className='font-semibold text:xl pb-2'>Free offered courses</h1>
        <p>
           Stories worth slowing down for. A curated bookstore for those who love the smell of pages, the weight of words, and the magic between lines.
        </p>
        </div>
    

    <div>
      <Slider {...settings}>
     {filterData.map((item)=>(
        <Card item={item} key={item.id}/>
     ))}
      </Slider>
    </div>
  
</div>
    
    
    </>
  )
}

export default Freebook