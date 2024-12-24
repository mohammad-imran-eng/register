import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <div>
            <Header />
            <ToastContainer position="top-center"/>
            <Outlet />
        </div>
    );
};

export default Layout;