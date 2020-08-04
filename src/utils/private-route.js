import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserService from '../services/user-service';

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        UserService.hasAccount()
        ? <Component {...componentProps} />
        : <Redirect
            to={{
              pathname: '/',
              state: { from: componentProps.location}
            }}
          />
      )}
    />
  )
}