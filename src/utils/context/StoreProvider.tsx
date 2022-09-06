import React from 'react';

import moment from 'moment';
import uuid from 'react-uuid';

import { StoreContext } from './StoreContext';
import { Event } from '../../interface';

interface Props {
  children:React.ReactNode
}

const allEvents: Event[] = [
  { id: uuid(), title: 'test', description: "test", date: '1662434870' },
  { id: uuid(), title: 'second test', description: "second test", date: '1662434170' },
  { id: uuid(), title: 'second test', description: "second test", date: '1662434170' },
  { id: uuid(), title: 'second test', description: "second test", date: '1662348470' },
  { id: uuid(), title: 'second test', description: "second test", date: '1665545270' },
];

const storedEvents: Event[] = JSON.parse(localStorage.getItem('Events') ?? JSON.stringify(allEvents))

export const StoreProvider: React.FC<Props> = ({ children }) => {

  const [currentDate, setCurrentDate] = React.useState(moment());
  const [events, setEvents] = React.useState(storedEvents);

  const prevMonthHandle = () => {
    setCurrentDate(prev => prev.clone().subtract(1, 'month'))
  }

  const nextMonthHandle = () => {
    setCurrentDate(prev => prev.clone().add(1, 'month'))
  }

  React.useEffect(() => {
    localStorage.setItem('Events', JSON.stringify(events))
  },[events])

  const value = {
    currentDate,
    prevMonthHandle,
    nextMonthHandle,
    events,
  }

  return (
    <StoreContext.Provider value={value}>{ children}</StoreContext.Provider>
  )
}
