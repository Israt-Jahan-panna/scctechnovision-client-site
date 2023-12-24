import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
           <div className="max-w-[1600px] mx-auto">
           <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Roots;