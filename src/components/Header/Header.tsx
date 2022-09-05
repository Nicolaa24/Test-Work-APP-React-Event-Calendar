import React from 'react'

import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { useStore } from '../../utils/context/useStore';
import { Modal } from '../Modal/Modal';
import { FormEvent } from '../FormEvent/FormEvent';


export const Header = () => {

  const [modal, setModal] = React.useState(false);

  const { prevMonthHandle,nextMonthHandle,currentDate} = useStore();

  return (
    <div className='bg-red-600 h-[20%] '>
      <div className='flex justify-start text-white text-4xl pt-3 pl-3'>
        React Calendar
      </div>
      <div className='flex justify-between m-3 '>

        <IoMdAddCircleOutline
          className='cursor-pointer text-5xl hover:text-white text-gray-800 '
          onClick={() => setModal(true)}
        >
        </IoMdAddCircleOutline>
        <div className='flex '>
          <AiOutlineArrowLeft
            className='text-3xl cursor-pointer hover:text-white'
            onClick={() => prevMonthHandle()}
          ></AiOutlineArrowLeft>
          <span className='text-center text-xl p-1 mx-2'>
            {currentDate.format('MMMM')} {currentDate.format('YYYY')}
          </span>
          <AiOutlineArrowRight
            className='text-3xl cursor-pointer hover:text-white'
            onClick={() => nextMonthHandle()}
          ></AiOutlineArrowRight>

        </div>
        {modal && <Modal closeModal={() => setModal(false)}>
          <FormEvent/>
        </Modal>}
      </div>
    </div>
  )
}
