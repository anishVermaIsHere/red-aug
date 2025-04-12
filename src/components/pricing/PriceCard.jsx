import React from 'react'
import { Icons } from '../common/Icons';

export const PriceCard = ({ card }) => {
    const { label, description, price, features } = card;
  return (
    <div className='p-10 bg-dark shadow-3xl rounded-3xl w-full'>
        <h3 className='text-2xl text-white'>{label}</h3>
        <p className='text-gray-400'>{description}</p>

        <div className='my-10'>
            <div className='text-gray-400 mb-10'><span className='text-4xl font-semibold text-white'>${price}</span>/ per month</div>
            <button className='bg-slate-300 rounded-2xl w-full p-3'>Proceed</button>
        </div>
        <hr className='border-gray-500 my-6'/>
        <div>
            <p className='text-lg text-white font-semibold mb-4'>What you will get</p>

            <ul>
               {features.map((ft, ind)=><li key={ind} className='flex items-center text-gray-300 mb-3'>
                    {ft.isAvailable ? <Icons.circleCheck className="me-3"/> : <Icons.circleCancel className="me-3"/>}
                    <span>{ft.title}</span>
                </li>)}
            </ul>
        </div>
    </div>
  )
}
