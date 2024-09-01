import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import '../index.css';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default AppLayout;

