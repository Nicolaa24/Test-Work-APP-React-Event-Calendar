import axios from 'axios';

import { Event } from '../../interface';

const URL = 'http://localhost:5000';

//instead hardcode push first month day and last month day
export const getAllEvents = async (start: number, end: number) => {
  try {
    const res = await axios.get<Event[]>(`${URL}/events?date_gte=${start}&date_lte=${end}`);
    console.log(res.data)
  } catch (e) {
    console.log(e)
  }
}