import React from 'react';

import moment from 'moment';

import { Calendar } from './components/Calendar/Calendar';
import { Header } from './components/Header/Header';
import { StoreProvider } from './utils/context/StoreProvider';

export const App = () => {

  // const lastDayOfTheMonth = moment().endOf('month').endOf('week');

  // const calendar = [];
  // const day = firstDayOfTheMonth.clone()
  // while (!day.isAfter(lastDayOfTheMonth)) {
  //   calendar.push(day.clone())
  //   day.add(1, 'day');
  // }

  return (
    <StoreProvider>
      <div className='w-screen h-screen'>
        <Header/>
        <Calendar/>
      </div>
    </StoreProvider>
  )
};
