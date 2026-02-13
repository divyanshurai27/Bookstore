import React from 'react'
import list from "../assets/list.json";
import Card from "./Card"
import { Link } from 'react-router-dom';

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl conatainer mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center 
             justify-center text-center'>
        <h1 className='text:4xl  md:text-4'>We are delighted to have you {" "}
            <span className='text-pink-600'>here! :)
            </span> 
         </h1><p className='mt-12'> Stories worth slowing down for. A curated bookstore for those who love the smell of pages, the weight of words, and the magic between lines. </p>
        
        <Link to={"/"}> 
        <button className='mt-6 bg-pink-500 text-shadow-fuchsia-300 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
         </button>
        </Link>

        
         </div>
         <div className='mt-12  grid grid-cols-1 md:grid-cols-3'>
            {list.map((item)=>(
                <Card key={item.id} item={item}/>
            ))}
         </div>
    </div>
    </>
  )
}

export default Course