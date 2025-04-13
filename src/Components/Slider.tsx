"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay  } from 'swiper/modules';
import SliderImage from "../Assests/Slider.png"
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/bundle'
import { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';

const Slider = () => {

    const {darkMode} = useContext(AppContext)

    return (
        <>
            <Container className="mt-5 pt-1 pt-lg-5">
                <Row className='m-2 slider'>
                <div className={`d-block d-lg-none w-100 h-100 text-start mb-4 px-4 ${darkMode ? "text-white" : "text-black"}`}>
                    <h2 className="fw-bold mb-4">Risk-free 30 day trial to level up your team’s productivity.</h2>
                    <p className="mb-4">Get started now and take advantage of our 30 day free trial today. No credit card required.</p>
                    <Button variant='primary' className="px-5 py-2 rounded-4">Start Free Trial</Button>
                </div>
                    <Swiper
                    modules={[Pagination , Autoplay]}
                    spaceBetween={-10}
                    slidesPerView={1}
                    pagination={{ clickable: true}}
                    autoplay={{ delay: 4000 }}
                    loop
                    >
                        <SwiperSlide>
                        <Row className='justify-content-center'>
                                <Col xs={12} md={10} lg={8} className='slider-cards'>
                                    <div className='card position-relative w-100 border-0 rounded-4'>
                                        <img src={SliderImage.src} alt="Slider-img" style={{height : "420px"}} className='w-100 rounded-4' />
                                        <div className="card-img w-100 h-100 align-content-center text-start text-white px-4">
                                            <h2 className="fw-bold mb-4">Risk-free 30 day trial to level up your team’s productivity.</h2>
                                            <p className="mb-4">Get started now and take advantage of our 30 day free trial today. No credit card required.</p>
                                        </div>
                                    </div>
                                </Col>
                        </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className='justify-content-center'>
                                <Col xs={12} md={10} lg={8} className='slider-cards'>
                                    <div className='card position-relative w-100 border-0 rounded-4'>
                                        <img src={SliderImage.src} alt="Slider-img" style={{height : "420px"}} className='w-100 rounded-4' />
                                        <div className="card-img w-100 h-100 align-content-center text-start text-white px-4">
                                            <h2 className="fw-bold mb-4">Risk-free 30 day trial to level up your team’s productivity.</h2>
                                            <p className="mb-4">Get started now and take advantage of our 30 day free trial today. No credit card required.</p>
                                        </div>
                                    </div>
                                </Col>
                        </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className='justify-content-center'>
                                <Col xs={12} md={10} lg={8} className='slider-cards'>
                                    <div className='card position-relative w-100 border-0 rounded-4'>
                                        <img src={SliderImage.src} alt="Slider-img" style={{height : "420px"}} className='w-100 rounded-4' />
                                        <div className="card-img w-100 h-100 align-content-center text-start text-white px-4">
                                            <h2 className="fw-bold mb-4">Risk-free 30 day trial to level up your team’s productivity.</h2>
                                            <p className="mb-4">Get started now and take advantage of our 30 day free trial today. No credit card required.</p>
                                        </div>
                                    </div>
                                </Col>
                        </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className='justify-content-center'>
                                <Col xs={12} md={10} lg={8} className='slider-cards'>
                                    <div className='card position-relative w-100 border-0 rounded-4'>
                                        <img src={SliderImage.src} alt="Slider-img" style={{height : "420px"}} className='w-100 rounded-4' />
                                        <div className="card-img  w-100 h-100 align-content-center text-start text-white px-4">
                                            <h2 className="fw-bold mb-4">Risk-free 30 day trial to level up your team’s productivity.</h2>
                                            <p className="mb-4">Get started now and take advantage of our 30 day free trial today. No credit card required.</p>
                                        </div>
                                    </div>
                                </Col>
                        </Row>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
        </>
    );
};

export default Slider;
