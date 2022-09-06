import React from "react";

import moment from 'moment'
import { Event } from "../../interface";

export interface StoreContext {
  currentDate: moment.Moment;
  prevMonthHandle: () => void;
  nextMonthHandle: () => void;
  events: Event[]
}

export const StoreContext = React.createContext<StoreContext>({
  currentDate: moment(),
  prevMonthHandle: () => { },
  nextMonthHandle: () => { },
  events:[],
} as StoreContext)