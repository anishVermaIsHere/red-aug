import React from 'react'
import { priceCards } from '../../utils/constants'
import { PriceCard } from './PriceCard'


const Pricing = () => {
  return (
    <section className="relative px-4 py-30 w-full">
        <div className='absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-sm text-center bg-dark text-gray-200 p-2 rounded-full'>Bring your business to the best scale</div>
      <h1 className="text-6xl text-center text-white mb-4">
        Discover Services with <br /> the Best Prices
      </h1>
      <p className='text-center text-gray-300'>Select from best plan, ensuring a perfect match. Need more <br/> or less? Customize your subscription for a seamless fit!</p>
      <div className="py-40 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-12">
          {priceCards.map((cd, ind)=><PriceCard key={ind} card={cd}/>)}
        </div>
      </div>
    </section>
  )
}

export default Pricing