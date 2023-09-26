import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=> fetch('/data.json')
            },
            {
                path:"/donations",
                element:<Donation/>,
                loader:()=> fetch('/data.json')
            },
            {
                path:"/statistics",
                element:<Statistics/>,
                loader:()=> fetch('../data.json')
                
            },
            {
               path:"/card/:id",
               element:<CardDetails/>,
               loader:()=> fetch('../data.json')
            }
           
        ]
    }
])
    

export default myCreatedRoute;