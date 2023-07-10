import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header"
import PubZone from "./PubZone"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
    <Header />
    <PubZone />
    <Outlet />
    <Footer />
    </>
  )
};
export default Layout;
