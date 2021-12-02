import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userStore } from "../storage/store";
import { USER_LOGOUT } from "../storage/actiontype";
import { Container, Nav, Navbar } from 'react-bootstrap';

const CustomNavbar = (props) => {
    const [active, setActive] = useState(window.location.pathname === '/' ? 0 : false);

    function handleLogout() {
        userStore.dispatch({
            type: USER_LOGOUT
        });
        window.localStorage.removeItem("user");
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <NavLink className="navbar-brand" to={props.navlinks[0].path} onClick={() => setActive(props.navlinks[0].id)}>
                    Food-Desk
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        {
                            props.navlinks.map(navlink => {
                                return (
                                    <NavLink key={navlink.id} className={"nav-link " + ((navlink.id === active || navlink.path === window.location.pathname) ? " active" : "")} to={navlink.path} onClick={() => setActive(navlink.id)}>
                                        {navlink.name}
                                    </NavLink>
                                );
                            })
                        }
                        <NavLink className="nav-link" to="/LogIn" onClick={handleLogout}>
                            LogOut
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;