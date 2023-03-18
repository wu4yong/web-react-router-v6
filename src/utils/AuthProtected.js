import React from 'react';
import {useAuth} from "../store";
import { Navigate, useLocation } from 'react-router-dom'

//保护路由 没登录让它跳转到登录页
const AuthProtected = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    if(!user){
        //利用state记录当前path name方便登录之后跳转到当前页面
        return <Navigate to='/login' state={{ path: location.pathname }}/>
    }
    return children;
};

export default AuthProtected;
