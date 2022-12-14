import React from 'react'

import moment from 'moment';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { CirclePicker } from 'react-color';

import { useStore } from '../../utils/context/useStore';

interface AddModeProps {
  mode: 'add'
  closeModal: () => void
}

interface EditModeProps {
  mode: 'edit'
  editEvent: {
    title: string;
    description: string;
    date: string;
  }
  event: string
}

type FormEventType = AddModeProps | EditModeProps;

const DEFAULT_EVENT = {
  title: '',
  description: '',
  date: ''
}

export const FormEvent: React.FC<FormEventType> = (props) => {
  const isEdit = props.mode === 'edit';

  const [event, setEvent] = React.useState(isEdit ? props.editEvent : DEFAULT_EVENT);

  const { addEvent, editEvent, deleteEvent, eventColor, setEventColor } = useStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value })
  }

  const addEventHandler = () => {
    const eventItem = { title: event.title, description: event.description, date: event.date };
    if (isEdit) {
      return editEvent(eventItem)
    }
    addEvent(eventItem)
    props.closeModal()
  }

  return (
    <div className='flex flex-col'>
      <div className='m-3 mt-5  text-center'>
        <input className=' p-2 w-[80%] outline-none'
          placeholder='Title'
          value={event.title}
          type='text'
          id='title'
          name='title'
          onChange={onChange} />
      </div>
      <div className='m-3  text-center '>
        <input className=' p-2 w-[80%] outline-none'
          value={event.description}
          placeholder='Description'
          type='text'
          id='description'
          name='description'
          onChange={onChange} />
      </div>
      <div className='mt-3  mx-3 p-2  text-center'>
        <input placeholder='Date'
          className='p-2 w-[80%]'
          value={event.date}
          type='date'
          onChange={(e) => setEvent({ ...event, date: moment(e.target.value).clone().format('X') })}
        />
      </div>
      <div className='  p-2 text-center w-[100%] m-auto'>
        <div className='mb-3 text-2xl font-bold'>Colors :</div>
        <div className='flex justify-center '>
          <CirclePicker
          color={eventColor}
          onChange={(color) => {
          setEventColor(color.hex)
          }}
        />
        </div>
      </div>
      <div className='flex flew-row items-center text-center w-[60%] m-auto'>
        <div className='flex p-1 text-center items-center'>
          {isEdit && <RiDeleteBin7Line className='flex cursor-pointer text-3xl'
            onClick={() => deleteEvent(props.event)}
          >Delete
          </RiDeleteBin7Line>}
        </div>
       
        <div className='w-[80%] mt-3'>
          {event.description === '' || event.title === '' || event.date === ''
            ? <button disabled className='bg-slate-400 w-full text-center m-auto mb-5 rounded-xl p-2 cursor-not-allowed'>Save</button>
            : <button className='bg-green-600  text-white w-[50%] text-center  mb-5 rounded-xl p-2'
              onClick={addEventHandler}
            >
              Save
            </button>
          }
        </div>
      
      </div>
      
    </div>
  )
};
