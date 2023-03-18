import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    //默认根路径
    const navigate = useNavigate();

    return (
        <>
            <h1>home page</h1>
            {/*第二个配置参数{replace: true}直接覆盖掉上一次的记录*/}
            <button
                onClick={
                () => {
                    navigate('order-summary',{
                        // replace: true
                    })
                }
              }
            >
                place order
            </button>
        </>
    );
};

export default Home;
