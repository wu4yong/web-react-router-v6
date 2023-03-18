import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <>
            <div>
                <input type='search' placeholder='search products'/>
            </div>
            <nav>
                {/*这里一定不要在路由地址前加/*/}
                <Link to='featured'>featured</Link>
                <Link to='new'>new</Link>
            </nav>
            {/*将子路由的所配对的组件包裹在Outlet中*/}
            <Outlet />
        </>
    );
};

export default Products;
