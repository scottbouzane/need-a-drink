import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div>
      <h2>This is the form</h2>
      
    </div>
  )
}