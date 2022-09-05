import React from "react";

import moment from 'moment'

export interface StoreContext {
  currentDate: moment.Moment;
  prevMonthHandle: () => void;
  nextMonthHandle: () => void;
}

export const StoreContext = React.createContext({
  currentDate: moment(),
  prevMonthHandle: () => { },
  nextMonthHandle: () => { },
})