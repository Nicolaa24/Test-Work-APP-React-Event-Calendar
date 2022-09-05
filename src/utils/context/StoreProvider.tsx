import React from 'react'

import moment from 'moment'

import { StoreContext } from './StoreContext'

interface Props {
  children:React.ReactNode
}

export const StoreProvider: React.FC<Props> = ({ children }) => {

  const [currentDate, setCurrentDate] = React.useState(moment());


  const prevMonthHandle = () => {
    setCurrentDate(prev => prev.clone().subtract(1, 'month'))
  }

  const nextMonthHandle = () => {
    setCurrentDate(prev => prev.clone().add(1, 'month'))
  }

  const value = {
    currentDate,
    prevMonthHandle,
    nextMonthHandle,

  }

  return (
    <StoreContext.Provider value={value}>{ children}</StoreContext.Provider>
  )
}
