"use client"
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "../AppContext/AppContext";

const HomeFAQ = () => {

    const { darkMode } = useContext(AppContext);

    return (
        <>
            <Container className="mt-5 mb-0 mb-lg-5 pt-5" id="FAQ">
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} style={{backgroundColor : `${darkMode ? "rgba(34, 34, 34, 1)" : "#e2e3e5"}`}} 
                    className={` ${darkMode ? "text-white" : "text-black"} py-4 MobileRadius text-center`}>
                        <h1 className="my-3 fw-bolder">FAQ</h1>
                        <p className="text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus earum laborum deserunt dolor quo porro vel accusamus nam natus labore! Temporibus
                        architecto dolorem consectetur voluptas voluptates nostrum obcaecati deleniti ullam.
                        </p>
                        <Row className="p-0 p-lg-3">
                            <Col xs={12} className=" my-2 border-bottom border-secondary-subtle">
                                <div className="d-flex justify-content-between mb-2">
                                    <p className="fw-bold">Lorem ipsum dolor sit?</p>
                                    <FontAwesomeIcon icon={faMinusCircle} width={"24px"} />
                                </div>
                                <p className="text-secondary text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere numquam quod temporibus! 
                                In voluptates repudiandae nisi velit, inventore et. Impedit enim iusto voluptates saepe at voluptatem consequuntur sed consequatur fugiat quod, beatae delectus eveniet sint in cumque alias velit, 
                                exercitationem accusamus hic. Sequi facere a, consequuntur architecto ab aperiam dolorum exercitationem accusamus hic. Sequi facere a, consequuntur 
                                </p>
                            </Col>
                            <Col className="d-flex py-2 justify-content-between my-2 border-bottom border-secondary-subtle" xs={12}>
                                <p className="fw-bold">Lorem ipsum dolor sit?</p>
                                <FontAwesomeIcon icon={faMinusCircle} width={"24px"} />
                            </Col>
                            <Col className="d-flex py-2 justify-content-between my-2 border-bottom border-secondary-subtle" xs={12}>
                                <p className="fw-bold">excepturi aliquid doloremque ?</p>
                                <FontAwesomeIcon icon={faMinusCircle} width={"24px"} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default HomeFAQ;