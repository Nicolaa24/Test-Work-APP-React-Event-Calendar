import React from 'react';

import { Calendar } from './components/Calendar/Calendar';
import { Header } from './components/Header/Header';
import { StoreProvider } from './utils/context/StoreProvider';

export const App = () => {
  
  return (
    <StoreProvider>
      <div className='w-screen h-screen'>
        <Header/>
        <Calendar/>
      </div>
    </StoreProvider>
  )
};
