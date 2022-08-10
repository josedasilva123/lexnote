/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);  
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
        navigate('/');
    }        
  }, [user]);

  return (
    <>
        {user && (
            <Outlet />
        )}        
    </>
  )
}

export default ProtectedRoutes;