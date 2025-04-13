import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import DesktopFooterInput from "./DesktopInput";
import MobileFooterInput from "./MobileInput";

interface FooterProps{
  darkMode : boolean
}

const Footer = ({darkMode} : FooterProps) => {

  return (
    <>
      <Container className="mt-3 mt-lg-5 pt-3">
        <Row>
          <Col xs={12} md={6} lg={4} className="text-center text-lg-start">
            <h4
              style={{ color: "#0324c5" }}
              className="fw-bolder ps-0 ps-lg-3 mb-4 mblg-0"
            >
              <Link className="text-decoration-none" href={"/"}>
                <span style={{ color: "#08C056" }}>7</span>flow
                <span style={{ color: "#08C056" }} className="fw-bolder">
                  .
                </span>
              </Link>
            </h4>
            <DesktopFooterInput />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Row>
              <Col className="mx-auto mx-lg-0" xs={7} lg={6}>
                <Link href={'/'} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className="fw-bold text-decoration-none">Pricing</Link>
              </Col>
              <Col className="mx-auto mx-lg-0 mt-3 mt-lg-0" xs={7} lg={6}>
                <Link href={'/'} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className="fw-bold text-decoration-none">Terms of Service</Link>
              </Col>
              <Col className="mx-auto mx-lg-0 mt-3" xs={7} lg={6}>
                <Link href={'/'} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className="fw-bold text-decoration-none">How it Works</Link>
              </Col>
              <Col className="mx-auto mx-lg-0 mt-3" xs={7} lg={6}>
                <Link href={'/'} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className="fw-bold text-decoration-none">Privacy policy</Link>
              </Col>
              <Col className="mx-auto mx-lg-0 mt-3 mb-4 mb-lg-0" xs={7} lg={6}>
                <Link href={'/'} style={{color : `${darkMode ? "rgba(129, 162, 210, 1)" : "rgb(108, 117, 125)"}`}} className="fw-bold text-decoration-none">FAQ</Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-center">
            <FontAwesomeIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="text-success"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="text-success mx-4"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="text-success "
              icon={faFacebook}
            />
            <MobileFooterInput />
          </Col>
          <Col xs={12} className="mt-5 text-center">
            <p className="text-secondary fw-bold">
              Made with{" "}
              <FontAwesomeIcon icon={faHeart} className="text-danger" /> by
              <strong className="text-primary text-decoration-underline">
                {" "}
                7ho.st
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
