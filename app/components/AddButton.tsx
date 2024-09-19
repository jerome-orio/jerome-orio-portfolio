'use client'
import React from 'react'

const AddButton = () => {
  return (
    <div className="p-10">
        <button className="btn btn-neutral" onClick={() => console.log('onclick')} >Add</button>
    </div>
  )
}

export default AddButton