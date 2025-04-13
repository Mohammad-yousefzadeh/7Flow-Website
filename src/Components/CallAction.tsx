"use client"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AppContext } from "../AppContext/AppContext";

const CallAction = () => {

    const {darkMode} = useContext(AppContext)

    return (
        <>
            <Container className="mb-5 mt-0 mt-lg-5 pt-0 pt-lg-0">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} style={{backgroundColor : `${darkMode ? "rgb(36, 37, 44)" : "#B0C6FF"}`}} className="align-content-center py-2 MobileRadius">
                        <Row className="my-5 py-4 justify-content-center">
                            <Col xs={12} lg={5} className="align-content-between text-center text-lg-start">
                                <h3 className="fw-bolder mb-4" style={{color : `${darkMode ? "rgba(79, 129, 255, 1)" : "#0445B1"}`}}>Risk-free 30 day trial to <span style={{color : "rgba(8, 192, 86, 1)"}}>level-up</span> your team's productivity.</h3>
                                <p className="fs-5 mb-0" style={{color : `${darkMode ? "rgba(133, 179, 255, 1)" : "#0445B1"}`}}>Get started now and take advantage of our 30 day free trial today. No credit card required</p>
                            </Col>
                            <Col xs={12} lg={3} className="align-content-end text-center">
                                <Button className="py-3 px-4 px-lg-5 mt-5 mt-lg-0 rounded-5 border-0 MobileButton" style={{backgroundColor : "#08C056"}}>Get Started <FontAwesomeIcon width={"10px"} className="ms-3" icon={faChevronRight} /></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default CallAction;