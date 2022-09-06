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

const storedEvents: Event[] = JSON.parse(localStorage.getItem('Events') ?? JSON.stringify(allEvents));

export const StoreProvider: React.FC<Props> = ({ children }) => {

  const [modal, setModal] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(moment());
  const [events, setEvents] = React.useState(storedEvents);
  const [eventIdForEdit, setEventIdForEdit] = React.useState<Event['id'] | null>(null);

  const selectEventIdForEdit = (id:Event['id']) => {
    setEventIdForEdit(id)
  }

  const addEvent = ({title,description,date}:Omit<Event, 'id'>) => {
    setEvents([...events, { id: uuid(), title, description, date }])
    
  }

  const deleteEvent = (id:Event['id']) => {
    setEvents(events.filter(event => event.id !==id))
  }

  const editEvent = ({title,description,date}:Omit<Event, 'id'>) => {
    setEvents(events.map(event => event.id === eventIdForEdit
      ? { ...event, title, description, date }
      : event))
    setEventIdForEdit(null)
  }

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
    addEvent,
    selectEventIdForEdit,
    eventIdForEdit,
    editEvent,
    deleteEvent,
    modal,
    setModal,
  }

  return (
    <StoreContext.Provider value={value}>{ children}</StoreContext.Provider>
  )
}
