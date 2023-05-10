import Home from "./Components/Home";
import Login from './Components/Login';
import Registration from './Components/Registration';

import { createBrowserRouter } from "react-router-dom";
import SingleChef from "./Components/SingleChef";
import PrivateRoute from "./Components/PrivateRoute";
import Error from "./Components/Error";
import Bolg from "./Components/Bolg";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<Error></Error>
    },
    
    {
        path:'/chef/:id',
        element:<PrivateRoute><SingleChef /></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:4000/chefRecipe/${params.id}`)
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