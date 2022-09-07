import React from 'react';

import moment from 'moment';

import { useStore } from '../../utils/context/useStore';
import { FormEvent } from '../FormEvent/FormEvent';
import { Modal } from '../Modal/Modal';
import { EventItem } from './EventItem';

interface Props {
  day:moment.Moment
  isCurrentDay: (day: moment.Moment) => boolean
  isCurrentMonth: (day: moment.Moment) => boolean
}

export const OneDay: React.FC<Props> = ({ day, isCurrentDay, isCurrentMonth }) => {
  
  const { events, eventIdForEdit, setModal } = useStore();

  return (
    <div
      className={day.day() === 6 || day.day() === 0
        ? 'min-w-[140px] min-h-[88px] border border-1 bg-slate-100 '
        : 'min-w-[140px] min-h-[88px] border border-1 '
      }>
      <div className='flex flex-col h-full w-full'>
        <div
          className={
            isCurrentDay(day) && day.format('D')
              ? 'flex justify-end bg-green-300 h-[30px] '
              : 'flex justify-end'
          }>
          <div className={isCurrentMonth(day)
            ? 'mx-3 mt-2 text-center text-black'
            : 'mx-3 mt-2 text-center text-neutral-400 '
          }>{day.format('DD')}
          </div>
        </div >
        <div className='overflow-scroll '>
          {events.filter(item => item.date >= day.format('X') && item.date <= day.clone().endOf('day').format('X')).map(item => {
                 
            if (item.id === eventIdForEdit)
              return <Modal closeModal={() => setModal(false)} key={item.id}>
                <FormEvent
                  editEvent={{ title: item.title, description: item.description, date: item.date }}
                  mode='edit'
                  event={item.id}
                />
              </Modal>
            return (
              <EventItem key={item.id} event={item} />
            )
          })}
        </div>
      </div>
    </div>
  )
};
