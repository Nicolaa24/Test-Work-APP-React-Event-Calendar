import React from 'react'

import moment from 'moment';
import uuid  from 'react-uuid';

import { useStore } from '../../utils/context/useStore';


export const Calendar = () => {

  const { currentDate } = useStore()
  
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
        [...Array(7)].map((day,index) => (
          <div key = {uuid()}
            className='h-[25px] flex justify-end mr-2 font-bold'>
            {moment().day(index + 1).format('ddd')}
          </div>)
        )
      }
      {
        daysOfTheMonth.map(day => (
          <div
            key={uuid()}
            className={day.day() === 6 || day.day() === 0
              ? 'min-w-[140px] min-h-[88px] border border-1 bg-slate-100 '
              : 'min-w-[140px] min-h-[88px] border border-1 '
            }>
            <div
              className={
                isCurrentDay(day) && day.format('D')
                  ? 'flex justify-end bg-green-300 '
                  : 'flex justify-end'
              }>
              <div className={isCurrentMonth(day)
                ?'m-3 text-black'
                :'m-3 text-neutral-400 '
              }>{day.format('DD')}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
