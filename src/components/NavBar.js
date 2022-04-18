import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../index";

const NavbarComponent = () => {
    const { authStore } = useContext(AuthContext);
    const navigate = useNavigate();
    const logout = () => {
        void authStore.logout();
        navigate("/", {replace: true});
    }

    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            Diploma
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/morph">
                                    Морфология
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/syntax">
                                    Синтаксис
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/semantic">
                                    Семантика
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="me">
                                <Nav.Link onClick={logout}>
                                    Выйти
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Outlet />
        </>
    );
};

export default NavbarComponent;
