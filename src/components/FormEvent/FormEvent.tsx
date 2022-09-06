import React from 'react'

import moment from 'moment';

export const FormEvent = () => {


  return (
    <div className='flex flex-col'>
      <div className='m-3 mt-5  text-center'>
        <input  className=' p-2 outline-none' placeholder='Title' type='text' />
      </div>
      <div className='m-3  text-center '>
        <input className=' p-2 outline-none' placeholder='Description' type='text' />
      </div>
      <div className='m-3 p-2 text-center'>
        <input placeholder='Date' type='date' onChange={(e)=>console.log(moment(e.target.value).clone().format('X'))}/>
      </div>
      <button className='bg-green-600  text-white w-[50%] text-center m-auto mb-5 rounded-xl p-2'>Save</button>
    </div>
  )
};
