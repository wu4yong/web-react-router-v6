import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
// import About from './components/About';
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeatureProducts from "./components/FeatureProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import AuthProtected from "./utils/AuthProtected";
import Login from "./components/Login";
const LazyAbout = React.lazy(() => import('./components/About'));

//app组件主要配置路由
const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <LazyAbout/>
                    </React.Suspense>
                }/>
                <Route path='order-summary' element={<OrderSummary/>}/>
                <Route path='products' element={<Products/>} >
                    {/*//嵌套路由*/}
                    <Route index element={<FeatureProducts/>}/>
                    <Route path='featured' element={<FeatureProducts/>}/>
                    <Route path='new' element={<NewProducts/>}/>
                </Route>
                <Route path='users' element={<Users/>}>
                    {/*动态路由，只有没有完全匹配的情况下才会尝试匹配动态路由*/}
                    <Route path=':id' element={<UserDetail/>}/>
                    <Route path='admin' element={<Admin/>}/>
                </Route>
                <Route path='login' element={<Login/>} />
                <Route path='profile' element={
                    <AuthProtected>
                        <Profile/>
                    </AuthProtected>
                }/>
                {/*当前面所有路由都没有匹配时会匹配path为*的路由*/}
                <Route path='*' element={<NoMatch/>} />
            </Routes>
        </>
    );
};

export default App;
