import React from 'react'
import { useSelector } from 'react-redux';
import { useCurrentToken, useCurrentUser } from '../../redux/features/auth/authSlice';
import { Navigate, } from 'react-router';
import { PrivateRoute, User } from '../../types/route.types';


const ProtectedRoute: React.FC <PrivateRoute> = ( {allowedRoles = [],children} ) => {
    const token = useSelector(useCurrentToken);
    const user: User| null= useSelector(useCurrentUser);
    
    if (!token) {
      return <Navigate to="/login" replace></Navigate>
    }
    if (allowedRoles.length && (!user?.role || !allowedRoles.includes(user?.role))) {
        return <Navigate to='/unauthorized' replace />
  }
  return <>{children}</>;
}

export default ProtectedRoute
