import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { RiContactsFill } from 'react-icons/ri';
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { IoLogIn } from 'react-icons/io5';
import Modal from 'react-modal';
import styled from "styled-components";
import { AccountBox } from "../Components/accountBox";
import JobLogo from "../Assests/myjoblogo.png"
import Profile from "../Pages/JobProfile";
import { connect } from "react-redux"
import { changeisuser } from '../Store/action';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link, useHistory } from "react-router-dom";

const customStyles = {
    content: {
        top: '45%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 20,
        marginTop: "5%",
        // padding:"28px",
        border: "3px solid #ff9902",

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




const NavBar = (props) => {
    const history = useHistory();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenProfile, setIsOpenProfile] = React.useState(false);

    const style = { color: "white", fontSize: "1em", boxShadow: "1px 3px 5px 1px #ff9902" }

    function openModal() {
        setIsOpen(!modalIsOpen);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalProfile() {
        window.location.assign('http://localhost:3000/JobProfile')
    }


    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img width={60} height={50} src={JobLogo} alt="" />
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
                        {
                            props.userInfo.email == "admin@gmail.com" &&
                                props.userInfo.pass == "admin123" ?
                                <Nav.Link href="/JobPost">Job Post</Nav.Link>
                                :
                                null
                        }
                    </Nav>
                    <Nav>
                        <button onClick={() => history.push("/JobProfile")}
                            className="IconButton marginProfBtn"> <ImProfile style={style} className="icons" /> </button>

                    </Nav>
                    <Nav>
                        <button onClick={() => openModal()} style={{ borderRadius: "5px" }} className="IconButton"> <FiLogOut style={style} className="icons" /> </button>
                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h5>
                                Are you sure you want to Logout?
                            </h5>
                            <Row style={{ textAlign: "center", marginTop: "10%" }}>
                                <Col>
                                    <button onClick={() => {
                                        props.changeisuser({email:"anonymous@gmail.com"})
                                        window.localStorage.clear()
                                        history.push("/")
                                        // setTimeout(()=>{
                                        //     window.location.reload("/")
                                        // },2000)
                                    }
                                    } style={{ borderRadius: "5px" }} className="IconButton"> YES </button>
                                </Col>
                                <Col>
                                    <button onClick={() => closeModal()} style={{ borderRadius: "5px" }} className="IconButton"> NO </button>

                                </Col>

                            </Row>
                        </Modal>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}


function mapDispatchToProps(dispatch) {
    return {
        changeisuser: (userInfo) => dispatch(changeisuser(userInfo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
