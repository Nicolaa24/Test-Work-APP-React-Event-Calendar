import React from 'react';

import moment from 'moment';
import uuid from 'react-uuid';

import { StoreContext } from './StoreContext';
import { Event } from '../../interface';

interface Props {
  children:React.ReactNode
}

const allEvents: Event[] = [];

const storedEvents: Event[] = JSON.parse(localStorage.getItem('Events') ?? JSON.stringify(allEvents));
const storedDate = moment(JSON.parse(localStorage.getItem('Date') ?? JSON.stringify(moment())) )

export const StoreProvider: React.FC<Props> = ({ children }) => {

  const [modal, setModal] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState( storedDate  );
  const [events, setEvents] = React.useState(storedEvents);
  const [eventIdForEdit, setEventIdForEdit] = React.useState<Event['id'] | null>(null);
  const [eventColor, setEventColor] = React.useState('#607d8b');
  
  const datePickerHandler = (value:Date) => {
    setCurrentDate(moment(value))
  }

  const selectEventIdForEdit = (id:Event['id']) => {
    setEventIdForEdit(id)
  }

  const addEvent = ({title,description,date}:Omit<Event, 'id' | 'color'>) => {
    setEvents([...events, { id: uuid(), title, description, date, color:eventColor }])
  }

  const deleteEvent = (id:Event['id']) => {
    setEvents(events.filter(event => event.id !==id))
  }

  const editEvent = ({title,description,date}:Omit<Event, 'id' | 'color'>) => {
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
  }, [events])

  React.useEffect(() => {
    if (!localStorage.getItem('Date')) {
      setCurrentDate(moment())
    }
    localStorage.setItem('Date', JSON.stringify(currentDate))

  }, [currentDate]);

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
    datePickerHandler,
    eventColor,
    setEventColor,
  }

  return (
    <StoreContext.Provider value={value}>{ children}</StoreContext.Provider>
  )
}
