import React, {useState} from 'react';
import {useAuth} from "../store";
import { useLocation, useNavigate } from "react-router-dom";

//登录页面
const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = () => {
        if(!username.trim()) {
            alert('请输入用户名');
            return;
        }
        login(username);
        const url = location.state?.path ? location.state.path : '/';
        console.log(url);
        navigate(url,  { replace: true } ); //移除记录login，使其倒退不跳转到login
    }

    return (
        <>
          <h1>Login</h1>
          <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
          <button onClick={handleLogin}>login</button>
        </>
    );
};

export default Login;
