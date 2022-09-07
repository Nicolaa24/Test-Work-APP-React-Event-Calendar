import React from 'react';
import { Event } from '../../interface';

import { useStore } from '../../utils/context/useStore';

interface Props {
  event: Event
}

export const EventItem: React.FC<Props> = ({ event }) => {

  const { selectEventIdForEdit } = useStore()

  return (
    <div>
      <button
        className='cursor-pointer bg-slate-400 text-white w-full p-1 text-left text-base font-semibold'
        onClick={() => selectEventIdForEdit(event.id)}
      >
        {event.title}: {event.description}
      </button>

    </div>
  )
};
