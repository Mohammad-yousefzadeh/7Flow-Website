import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ClientDesignedSection from "./ClientSide";

const DesignedSection = () => {
    return (
        <>
            <Container className="mb-3 mb-lg-5 mt-4 pt-0 pt-lg-3">
                <Row className="justify-content-center">
                    <Col xs={12} lg={5} className="text-center">
                        <ClientDesignedSection />
                    </Col>
                    <Col xs={12} lg={5} className="align-content-center p-3 p-lg-5">
                        <h2 className="fw-bolder" style={{color : '#5d18ff'}}>Revolutionize you workflow</h2>
                        <p className="text-secondary mt-4 mb-5 pe-0 pe-lg-5">We have designed our app for increased efficiency and it will help you to start getting more things done</p>
                        <div className="text-end">
                            <Link href={'/'} className="text-decoration-none text-end pe-0 pe-lg-5">Learn more <FontAwesomeIcon className="ms-2" width={'10px'} icon={faChevronRight} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default DesignedSection;