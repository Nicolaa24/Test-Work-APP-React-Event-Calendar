import React from 'react'

import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosCalendar } from 'react-icons/io';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useStore } from '../../utils/context/useStore';
import { Modal } from '../Modal/Modal';
import { FormEvent } from '../FormEvent/FormEvent';


export const Header = () => {
  const [datePickerModal, setDatePickerModal] = React.useState(false);

  const { prevMonthHandle, nextMonthHandle, currentDate, modal, setModal,datePickerHandler } = useStore();

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
          <IoIosCalendar className='text-3xl mx-2 cursor-pointer hover:text-white'
            onClick={() => setDatePickerModal(true)}
          >

          </IoIosCalendar>
          {datePickerModal && <Modal closeModal={() => setDatePickerModal(false)}>
            <div className=' w-full m-4'>
              <span className='flex text-lg font-semibold justify-center '>Select year and month</span>
              <DatePicker
                className='m-4'
                selected={new Date()}
                onChange={datePickerHandler}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
              />
              <button
                className=' justify-center p-1 bg-slate-700 text-white rounded-xl w-[50%]  '
                onClick={() => setDatePickerModal(false)}>Confirm</button>
            </div>
          </Modal>}
        </div>
        {modal && <Modal closeModal={() => setModal(false)} >
          <FormEvent mode='add' closeModal={() => setModal(false)} />
        </Modal>}
      </div>
    </div>
  )
};
