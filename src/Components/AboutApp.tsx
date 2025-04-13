"use client"
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp , faCreditCard, faGears } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const AboutApp = () => {

    const {darkMode} = useContext(AppContext)

    return (
        <>
            <Container className="my-4 mb-5 pb-4">
                <Row className="justify-content-center">
                    <Col xs={12} lg={8} className="text-center">
                        <h2 className={`fw-bold ${darkMode ? "text-white" : "text-black"}`}>Get more done in <span style={{color : "#00af00"}}>less time</span></h2>
                        <h4 className="text-secondary mt-1">Simple, fast, effortlessly</h4>
                        <Row className="mt-5 justify-content-center">
                            <Col xs={12} md={6} lg={4} className="d-flex align-items-center mb-3 mb-lg-0 justify-content-center">
                                <div className="rounded-circle" style={{width : "42px" , backgroundColor : "rgb(185, 241, 255)"}}>
                                    <FontAwesomeIcon className="my-2 p-1" width={"29px"} icon={faArrowTrendUp} />
                                </div>
                                <p className="mb-0 ms-3" style={{color : `${darkMode ? "rgba(205, 205, 255, 1)" : "blue"}`}}>Transparent Pricing</p>
                            </Col>
                            <Col xs={12} md={6} lg={4} className="d-flex align-items-center mb-3 mb-lg-0 justify-content-center">
                                <div className="rounded-circle" style={{width : "42px" , backgroundColor : "rgb(255, 213, 121)"}}>
                                    <FontAwesomeIcon className="my-2 p-1" width={"29px"} icon={faGears} />
                                </div>
                                <p className="mb-0 ms-3" style={{color : `${darkMode ? "rgba(205, 205, 255, 1)" : "blue"}`}}>Easy Integraion</p>
                            </Col>
                            <Col xs={12} md={6} lg={4} className=" d-flex align-items-center mb-3 mb-lg-0 justify-content-center">
                                <div className="rounded-circle" style={{width : "42px" , backgroundColor : "rgb(238, 200, 235)"}}>
                                    <FontAwesomeIcon className="my-2 p-1" width={"29px"} icon={faCreditCard} />
                                </div>
                                <p className="mb-0 ms-3" style={{color : `${darkMode ? "rgba(205, 205, 255, 1)" : "blue"}`}}>Superb Efficiency</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default AboutApp;