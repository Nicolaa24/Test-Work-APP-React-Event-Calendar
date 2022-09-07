import React from 'react'

import moment from 'moment';
import uuid  from 'react-uuid';

import { useStore } from '../../utils/context/useStore';
import { OneDay } from './OneDay';


export const Calendar = () => {

  const { currentDate } = useStore();
  
  const firstDayOfTheMonth = currentDate.clone().startOf('month').startOf('week');
  const oneDay = firstDayOfTheMonth.clone();

  const daysOfTheMonth = [...Array(42)].map(() => oneDay.add(1, 'day').clone());
  
  const isCurrentDay = (day: moment.Moment) => {
    return moment().isSame(day, 'day')
  };

  const isCurrentMonth = (day: moment.Moment) => {
    return currentDate.isSame(day, 'month')
  };

  return (
    <div className='w-screen h-[80%] grid grid-cols-7 grid-row-6  '>
      {
        [...Array(7)].map((day, index) => (
          <div key={uuid()}
            className='h-[25px] flex justify-end mr-2 font-bold'>
            {moment().day(index + 1).format('ddd')}
          </div>)
        )
      }
      {
        daysOfTheMonth.map(day => (
          <OneDay isCurrentDay={isCurrentDay} isCurrentMonth={isCurrentMonth} day={day} key={uuid()}/>
        ))
      }
    </div>
  )
};
