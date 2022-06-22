import React from 'react'
import { UserStorage } from './UserContext'
import { NotesStorage } from './NotesContext'

const Storages = ({children}) => {
  return (
    <UserStorage>
      <NotesStorage>
        {children}
      </NotesStorage>       
    </UserStorage>
  )
}

export default Storages