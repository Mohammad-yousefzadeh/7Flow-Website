import { Button, Col, Container, Row } from "react-bootstrap";
import heroImage from "../Assests/3be2b6987294e4cf867d5a80b883b0e3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <>
            <Container className="mt-5 pt-5">
                <Row className="pt-0 pt-lg-4">
                    <Col lg={6}>
                        <h1 className="fw-bolder display-5 p-2 text-center text-lg-start" style={{color : "blue"}}>Manage your daily tasks better without all the stress.</h1>
                        <h5 className="text-secondary my-4 pt-1 text-center text-lg-start">
                        Change the way you manage your tasks with our revolutionary
                        project management technology
                        </h5>
                        <div className="mt-5">
                            <Button className="border-0 text-white mb-3 mb-lg-0 rounded-5 py-2 px-4 MobileButton" style={{backgroundColor : "#08C056"}}>Get Started <FontAwesomeIcon width={"10px"} className="ms-4" icon={faChevronRight} /></Button>
                            <Button variant="outline-primary" className="rounded-5 py-2 px-4 ms-0 ms-lg-3 fw-bold MobileButton">Schedule a Demo</Button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img src={heroImage.src} className="ps-0 ps-lg-3 w-100 mt-4 mt-lg-0" alt="Hero-Section-image" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Hero;