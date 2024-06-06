import React from 'react';
import { Navigate } from 'react-router-dom';
import { ToastifyError } from '../../function/toast';

export const PrivateRoute = ({ authenticated, component}) => {
  return (
    authenticated ? component : <Navigate to='/' />
  )
 };