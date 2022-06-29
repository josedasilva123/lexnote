import React from 'react'
import { NotesProvider } from './NotesContext'
import { UserProvider } from './UserContext'

//Componente para organizar o projeto (não deixando vários providers no index.js)
const Providers = ({children}) => {
  return (
    <UserProvider>
        <NotesProvider>
            {children}
        </NotesProvider>
    </UserProvider>
  )
}

export default Providers