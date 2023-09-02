import Home from "./Components/Home";
import Login from './Components/Login';
import Registration from './Components/Registration';

import { createBrowserRouter } from "react-router-dom";
import Bolg from "./Components/Bolg";
import Error from "./Components/Error";
import PrivateRoute from "./Components/PrivateRoute";
import SingleChef from "./Components/SingleChef";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<Error></Error>
    },
    
    {
        path:'/chef/:id',
        element:<PrivateRoute><SingleChef /></PrivateRoute>,
        loader:({params})=> fetch(`https://server-chef.vercel.app/chefRecipe/${params.id}`)
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/reg',
        element:<Registration></Registration>
    },
   {
    path:"/blog",
    element:<Bolg></Bolg>
   }
])


export default router