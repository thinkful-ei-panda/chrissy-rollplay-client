import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserService from '../services/user-service.js';

export default function PublicRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        UserService.hasAccount()
          ? <Redirect to={'/topics'} />
          : <Component {...componentProps} />
      )}
    />
  )
}