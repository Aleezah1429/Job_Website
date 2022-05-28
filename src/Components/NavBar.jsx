import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { RiContactsFill } from 'react-icons/ri';
import { IoLogIn } from 'react-icons/io5';
import Modal from 'react-modal';
import styled from "styled-components";
import { AccountBox } from "../Components/accountBox";
import JobLogo from "../Assests/myjoblogo.png"



const customStyles = {
    content: {
        top: '45%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius:20,
        marginTop:"5%",
        padding:"8px",
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
};

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;




const NavBar = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const style = { color: "white", fontSize: "1em" }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img width={65} height={60} src={JobLogo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navBar">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                        <Nav.Link href="/Categories">Categories</Nav.Link>
                        <Nav.Link href="/JobSearch">Job Search</Nav.Link>
                        {/* <Nav.Link href="/JobList">Job List</Nav.Link> */}
                        <Nav.Link href="/JobPost">Job Post</Nav.Link>
                    </Nav>
                    <Nav>
                        <button onClick={openModal} className="IconButton"> <RiContactsFill style={style} className="icons" /> </button>

                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <AppContainer>
                                <AccountBox />
                            </AppContainer>
                        </Modal>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;