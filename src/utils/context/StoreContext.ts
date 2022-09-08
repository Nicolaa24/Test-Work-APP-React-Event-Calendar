import React from "react";

import moment from 'moment'
import { Event } from "../../interface";

export interface StoreContext {
  currentDate: moment.Moment;
  prevMonthHandle: () => void;
  nextMonthHandle: () => void;
  events: Event[];
  addEvent: ({ title, description, date }: Omit<Event, 'id' | 'color'>) => void;
  selectEventIdForEdit: (id: Event['id']) => void;
  eventIdForEdit: Event['id'] | null;
  editEvent: ({ title, description, date }: Omit<Event, 'id' | 'color'>) => void;
  deleteEvent: (id: Event['id']) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  datePickerHandler: (value: Date) => void;
  eventColor: string;
  setEventColor: React.Dispatch<React.SetStateAction<string>>
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
  datePickerHandler: () => { },
  eventColor: '#607d8b',
  setEventColor: () => { }
} as StoreContext);