"use client"
import React from 'react'

const ArchiveErrorPage = ({error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default ArchiveErrorPage