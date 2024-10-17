"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const BackdropDiv = () => {
    const router = useRouter();
    const handleBackdropClick = () => {
        router.back();
    }
  return (
    <div className='modal-backdrop' onClick={handleBackdropClick}/>
  )
}

export default BackdropDiv