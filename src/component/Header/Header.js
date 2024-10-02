import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();/// react router dom
    if (location.pathname !== "/")
        return null;
    // const hiddenRoutes = [`/Admin`, `/Admin/ManageUser`]; //duong dan muon an
    // const ishiddenshow = hiddenRoutes.includes(location.pathname);
    // if (ishiddenshow) return null;

    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary" >

                <Container>

                    <NavLink to="/" className="navbar-brand"  >Home</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/User" className="nav-link">User</NavLink>
                            <NavLink to="/Admin" className="nav-link">Admin</NavLink>

                        </Nav>
                        <Nav>
                            <button className='btn-login'>Login</button>
                            <button className='btn-signup'>Sign up</button>
                            {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">profile</NavDropdown.Item>

                        </NavDropdown> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;