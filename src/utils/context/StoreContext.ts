import React from "react";

import moment from 'moment'
import { Event } from "../../interface";

export interface StoreContext {
  currentDate: moment.Moment;
  prevMonthHandle: () => void;
  nextMonthHandle: () => void;
  events: Event[];
  addEvent: ({ title, description, date }: Omit<Event, 'id'>) => void;
  selectEventIdForEdit: (id: Event['id']) => void;
  eventIdForEdit: Event['id'] | null;
  editEvent: ({ title, description, date }: Omit<Event, 'id'>) => void;
  deleteEvent: (id: Event['id']) => void;
  modal: boolean;
  setModal: (elem:boolean) => void
}

export const StoreContext = React.createContext<StoreContext>({
  currentDate: moment(),
  prevMonthHandle: () => { },
  nextMonthHandle: () => { },
  events: [],
  addEvent: () => { },
  selectEventIdForEdit: () => { },
  eventIdForEdit: null,
  editEvent: () => { },
  deleteEvent: () => { },
  modal: false,
  setModal: () => { },
  
} as StoreContext)