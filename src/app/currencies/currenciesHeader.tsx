import { Col, Row } from "react-bootstrap";
import currencyImage from "../../Assests/02856777e41ef74b04710f75e6a76a71.png"

const Header = () => {
    return (
        <>
            <div className="container-fluid mt-5 pt-5" style={{backgroundColor : "rgba(222, 203, 233, 1)"}}>
                <Row className="py-3 justify-content-center">
                    <Col xs={12} md={6} lg={4} className="align-content-center text-center text-lg-start">
                        <h1 className="mb-4 display-6 fw-bolder">Todays Cryptocurrency prices</h1>
                        <h5 className="text-secondary" style={{fontWeight : "60px"}}>The global crypto market cap is <span className="fw-bold text-black">$1.68T</span></h5>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="text-center">
                        <img src={currencyImage.src} style={{width : "80%"}} alt="" />
                    </Col>
                </Row>
            </div>
        </>
    );
}
 
export default Header;