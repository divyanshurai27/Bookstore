import React from 'react'


function Card({ item }) {
  
  return (
    <>
    <div className='mt-4 my-3 p-3'>
        <div className="card bg-base-100 w-95 shadow-xl hover:scale-105 duration-200 ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Price</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full border-[2x] badge badge-outline hover:bg-pink-700 duration-200 hover:text-white duration-200 ">Buy Iteam</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card