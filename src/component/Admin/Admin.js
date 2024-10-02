import header from "../Header/Header";
import SideBar from "./SideBar"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../Home/Home";
import "./Admin.scss";

const Admin = () => {

    return (
        <>
            <div className="admin-container">
                <div className="admin-sidebar">
                    <SideBar />
                </div>
                <div className="admin-content">
                    <div className="header-content">
                        Admin
                    </div>
                    <div className="main-main">
                        <Outlet />

                    </div>

                </div>

            </div>

        </>

    )

}
export default Admin;