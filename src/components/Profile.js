import React from 'react';
import {useAuth} from "../store";
import {useNavigate} from "react-router-dom";

//个人资料组件
const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div>
            <h1>welcome {user}</h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Profile;
