import React from 'react'

import { useStore } from '../../utils/context/useStore';

interface Props {
  children: React.ReactNode;
  closeModal: () => void
}

export const Modal: React.FC<Props> = ({ children,closeModal}) => {
  
  const {setModal} = useStore()

  return (
    <>
      <div
        className='w-screen fixed bg-black/50 top-0 right-0 bottom-0 left-0'
        onClick={closeModal}
      />
      <div className='w-[30%] bg-white absolute rounded-xl top-15 left-1/2 -translate-x-1/2'>
        {children}
      </div>
    </>
  )
}
