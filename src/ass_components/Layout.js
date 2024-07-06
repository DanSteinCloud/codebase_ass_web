import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAgro from "./HeaderAgro"
import HeaderPastoral from "./HeaderPastoral"
import PubZone from "./PubZone"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
    <HeaderAgro />
    <PubZone />
    <Outlet />
    <Footer />
    </>
  )
};
export default Layout;
