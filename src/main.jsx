import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { Toaster } from 'react-hot-toast';
import Authprovider from './provider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider><RouterProvider router={router}></RouterProvider></Authprovider>
  
)
