"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardanoImage from "../../Assests/7318211237cf939e65a1e7863bd63981.png"
import { Col, Container, Row } from "react-bootstrap";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { AppContext } from "@/src/AppContext/AppContext";

const ShowCurrencies = () => {

    const {ShowingCurrencyCard , showCurrenyCard , darkMode} = useContext(AppContext)

    useEffect(()=>{
        if(showCurrenyCard){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'unset'  
        }
    } , [showCurrenyCard])

    return (
        <>
           <Container className={`currency-card ${showCurrenyCard ? "d-flex" : "d-none"}`}>
                <Row className=" justify-content-center">
                    <Col className="showCurrencyCard rounded-4 px-3 py-4" xs={12} md={9} lg={5} style={{backgroundColor : `${darkMode ? "rgb(19, 19, 19)" : "#e2e3e5"}` , color : `${darkMode ? "white" : " black"}`}}>
                        <div className="d-flex justify-content-between mb-5">
                            <h4 style={{color : "rgb(0, 101, 196)"}} className="fw-bold ps-0 ps-lg-3 align-content-center mb-0">
                                <span style={{color : "#08C056"}}>7</span>currencies
                                <span style={{color : "#08C056"}} className="fw-bolder">.</span>
                            </h4>
                            <FontAwesomeIcon onClick={ShowingCurrencyCard} style={{fontSize : "30px" , cursor : "pointer"}} className="text-white bg-black rounded-5" icon={faXmarkCircle} />
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                            <div className="d-flex">
                                <img src={cardanoImage.src} style={{width : "37px"}} alt="cardona-image" />
                                <h4 className="mb-0 align-content-center ms-1">Cardona <span className="text-secondary">ADA</span></h4>
                            </div>
                            <p className="text-secondary d-none d-lg-flex mb-0 align-content-center">1403/12/05</p>
                        </div>
                        <h3>0.66 <span style={{color : "#08C056"}}>USD</span></h3>
                        <p className="text-secondary mt-5 d-flex d-lg-none mb-0 justify-content-end align-content-center">1403/12/05</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default ShowCurrencies;