import React from 'react';
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1>order summary</h1>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    );
};

export default OrderSummary;
