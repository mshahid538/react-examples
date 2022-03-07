import {Outlet, Navigate} from 'react-router-dom';

export default function PrivateRoutes(){
    const isLogged=false;
    return isLogged ? <Outlet/> : <Navigate to='/signin'/>
}