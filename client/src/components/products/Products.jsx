import React from 'react'

const Products = () => {
  return (
    <div className='products-wrapper grid gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]'>
      <div className='product-item border hover:shadow-lg transition-all cursor-pointer select-none'>
        <div className='product-img'>
            <img src="logo192.png" alt="" className='h-28 object-cover w-full border-b'/>
        </div>
        <div className="product-info flex flex-col p-3">
            <span className='font-bold'>Elma</span>
            <span>12</span>
        </div>
      </div>
      <div className='product-item border hover:shadow-lg transition-all cursor-pointer select-none'>
        <div className='product-img'>
            <img src="logo192.png" alt="" className='h-28 object-cover w-full border-b'/>
        </div>
        <div className="product-info flex flex-col p-3">
            <span className='font-bold'>Elma</span>
            <span>12</span>
        </div>
      </div>
    </div>
  )
}

export default Products
