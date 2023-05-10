import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className="mx-auto text-center"><div class="spinner-grow text-primary" role="status"></div></div>
    }

  if(user){
    return children
  }



  return <Navigate to='/login'></Navigate>


};

export default PrivateRoute;