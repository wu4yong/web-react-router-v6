import React from 'react';
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {

    const [search, setSearchParams] = useSearchParams();
    const showActiveUsers = search.get('filter') === 'active';

    return (
        <div>
            <h1>user 1</h1>
            <h1>user 2</h1>
            <h1>user 3</h1>
            <Outlet/>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active users</button>
                <button onClick={() => setSearchParams({})}>Reset filter</button>
            </div>
            {
                showActiveUsers ? <h2>showing active user</h2> : <h2>showing all users</h2>
            }
        </div>
    );
};

export default Users;
