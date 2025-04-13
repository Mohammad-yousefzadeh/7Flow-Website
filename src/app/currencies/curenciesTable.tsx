"use client"
import { Col, Container, Row } from "react-bootstrap";
import cardanoImage from "../../Assests/7318211237cf939e65a1e7863bd63981.png"
import { useContext } from "react";
import { AppContext } from "@/src/AppContext/AppContext";

const CurrenciesTable = () => {

    const {ShowingCurrencyCard , darkMode}= useContext(AppContext)

    return (
        <>
            <Container className="mt-0 mt-lg-5">
                <Row>
                    <Col xs={12} className="py-4 currenciesTable" style={{backgroundColor : `${darkMode ? "rgb(34, 34, 34)" : "#e2e3e5"}` , color : `${darkMode ? "white" : " black"}`}}>
                        <div className="w-100" style={{backgroundColor : `${darkMode ? "rgb(34, 34, 34)" : "#e2e3e5"}` , color : `${darkMode ? "white" : " black"}`}}>
                            <Row className="border-bottom border-secondary-subtle mb-3">
                                <Col xs={1} className="text-center align-content-center">
                                    <p className="text-secondary mb-0 mb-lg-2">#</p>
                                </Col>
                                <Col xs={5} className="align-content-center">
                                    <p className="text-secondary mb-0 mb-lg-2">Name</p>
                                </Col>
                                <Col className="text-center align-content-center" xs={4}>
                                    <p className="text-secondary mb-0 mb-lg-2">Price(USD)</p>
                                </Col>
                                <Col xs={2} className="text-secondary align-content-center text-center">
                                    <p className="text-secondary mb-0 mb-lg-2">Last Updated</p>
                                </Col>
                            </Row>
                            {
                                Array(12).fill("").map((e,index)=>(
                                    <Row style={{cursor : "pointer"}} onClick={ShowingCurrencyCard} key={index} className="mt-1">
                                        <Col xs={1} className="text-center">
                                        <p>1</p>
                                        </Col>
                                        <Col xs={5}>
                                            <p><img src={cardanoImage.src} className="me-1" style={{width : "18px"}} alt="cardona-image" /> Cardano ADA</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className=" text-center">0.66</p>
                                        </Col>
                                        <Col xs={2} className="text-secondary text-center">
                                            <p>1403/12/05</p>
                                        </Col>
                                    </Row>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default CurrenciesTable;