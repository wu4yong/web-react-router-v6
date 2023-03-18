import React from 'react';
import { useParams } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    return (
        <div>
            Detail about user {id}
        </div>
    );
};

export default UserDetail;
