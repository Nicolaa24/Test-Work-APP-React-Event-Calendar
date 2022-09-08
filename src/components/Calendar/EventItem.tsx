import React from 'react';
import { Event } from '../../interface';

import { useStore } from '../../utils/context/useStore';

interface Props {
  event: Event
}

export const EventItem: React.FC<Props> = ({ event }) => {

  const eventBgStyle = ['cursor-pointer text-white w-full p-1 text-left text-base font-semibold', `bg-[${event.color}]`];

  const { selectEventIdForEdit } = useStore();

  return (
    <div>
      <button
        className={eventBgStyle.join(' ')}
        onClick={() => selectEventIdForEdit(event.id)}
      >
        {event.title}: {event.description}
      </button>

    </div>
  )
};
