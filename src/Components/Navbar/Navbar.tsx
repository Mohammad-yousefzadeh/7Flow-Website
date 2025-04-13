import Link from "next/link";
import {Link as ScrollLink} from "react-scroll"
import { Button, Col, Row } from "react-bootstrap";
import NavbarHumbergur from "./NavbarHumbergur";

interface NavbarProps{
    darkMode : boolean
}

const Navbar = ({darkMode} : NavbarProps) => {
    return (
        <>
                <nav className="container-fluid fixed-top" style={{boxShadow : "0px 0px 1px 1px rgb(174, 204, 243)" , backgroundColor : `${darkMode ? "rgb(20,20,20)" : "white"}`}}>
                    <Row className="py-3">
                        <Col xs={7} className="d-flex align-items-center justify-content-start justify-content-lg-around">
                            <h3 style={{color : "blue"}} className="fw-bold ps-0 ps-lg-3">
                                <Link className="text-decoration-none" href={'/'} >
                                    <span style={{color : "#08C056"}}>7</span>flow
                                    <span style={{color : "#08C056"}} className="fw-bolder">.</span>
                                </Link>
                            </h3>
                            <div className="d-none d-lg-block">
                                <Link className="fw-bold text-decoration-none" style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} href={'/'}>Pricing</Link>
                                <Link className=" mx-5 fw-bold text-decoration-none" style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} href={'/'}>How it Works</Link>
                                <ScrollLink style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}` , cursor : "pointer"}} className=" me-5 fw-bold text-decoration-none" to="FAQ" offset={-50} duration={500} >FAQ</ScrollLink>
                                <Link className="fw-bold text-decoration-none" style={{color : "#08C056"}} href={'/currencies'}>Currencies</Link>
                            </div>
                        </Col>
                        <Col xs={5} className="text-center align-content-center">
                            <Button className="d-none d-lg-inline-block rounded-5 py-2 px-3 me-4 border-0 fw-bold bg-transparent" 
                            style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}}>Sign in</Button>
                            <Button variant="primary" className="d-none d-lg-inline-block rounded-5 py-2 px-3"><Link className="text-white text-decoration-none" href={'/currencies'}>Get Started</Link></Button>
                            <NavbarHumbergur />
                        </Col>
                    </Row>
                </nav>
        </>
    );
}
 
export default Navbar;