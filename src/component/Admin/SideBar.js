import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Admin.scss"
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
} from "@trendmicro/react-sidenav";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import NavDropdown from 'react-bootstrap/NavDropdown';

const SideBar = () => {
    const [isVisible, setisVisible] = useState(false)

    const constructor = (props) => {
        setisVisible()
    }
    return (
        <>
            <SideNav expanded={isVisible}>

                <SideNav.Toggle
                    onClick={() => constructor(!isVisible)}
                />
                <SideNav.Nav defaultSelected="home">

                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa-solid fa-house" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText > <NavLink to="/" className="nav-link">Home</NavLink></NavText>
                    </NavItem>
                    <NavItem eventKey="placed orders">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "1.75em" }}
                            />
                        </NavIcon>
                        <NavText>
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item ><NavLink to="ManageUser" className="nav-link">Quan Ly User</NavLink></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink to="/" className="nav-link">Quan ly Quizz</NavLink></NavDropdown.Item>
                                <NavDropdown.Item ><NavLink to="/" className="nav-link">Quan ly Cau hoi</NavLink></NavDropdown.Item>
                            </NavDropdown>
                        </NavText>
                    </NavItem>

                    <NavItem>
                        <NavIcon>
                            <i className="fa-solid fa-dollar-sign" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>do somthing</NavText>
                    </NavItem>
                    <div className=" footer-nav">
                        <a
                            href="/"
                            target="_blank"
                            className="sidebar-btn"
                        >

                        </a>
                        <span>

                            Vi3etz
                        </span>

                    </div>
                </SideNav.Nav>

            </SideNav >


        </>
    );


}

export default SideBar;
