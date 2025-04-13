import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ClientTemplate from "./ClientTemplate";

const TemplateSection = () => {
    return (
        <>
            <Container className="mb-5 mt-0 mt-lg-5 pt-5">
                <Row className="d-flex flex-wrap-reverse justify-content-center">
                    <Col xs={12} lg={5} className="align-content-center p-3 p-lg-5">
                        <div className="w-auto mx-auto">
                            <h2 className="fw-bolder" style={{color : 'rgb(255, 145, 0)'}}>Free template library included</h2>
                            <p className="text-secondary mt-4 mb-5 pe-0 pe-lg-5">We have designed our app for increased efficiency and it will help you to start getting more things done</p>
                            <div className="text-end">
                                <Link href={'/'} className="text-decoration-none text-end pe-0 pe-lg-5">Learn more <FontAwesomeIcon className="ms-2" width={'10px'} icon={faChevronRight} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={5}>
                        <ClientTemplate />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default TemplateSection;