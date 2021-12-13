import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = () => {

  }

  return (
    <div>
      <h2>This is the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
          <input
          type='text'
          value={contact}
          name='contact'
          onChange={(e) => setContact(e.target.value)}
        />
          <input
          type='text'
          value={address}
          name='address'
          onChange={(e) => setAddress(e.target.value)}
        />
        <button>Submit</button>
        
      </form>
      
    </div>
  )
}
