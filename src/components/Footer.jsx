import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import '../assets/styles/footer.css'

export default function Footer() {
    return (
        <>
        <div className='bg-pr-blue pt-5'>
            <Container fluid>
                <Row className=' d-flex align-items-center gap-5 pb-5'>
                    <Col className='d-flex justify-content-end'>
                        <Image src='/images/logo-2.png' />
                    </Col>
                    <Col className='d-inline'>
                        <div className='text-white text-manrope fw-semibold fs-4 mb-4'>
                            Contact
                        </div>
                        <div className="d-flex align-items-center text-white gap-3 mb-3">
                            <FiPhone className='fw-semibold fs-5' />
                            <div>
                                (0232) 8990 5556, 890 5557
                            </div>
                        </div>
                        <div className="d-flex align-items-center text-white gap-3">
                            <MdOutlineEmail className='fw-semibold fs-5' />
                            <div>
                                mentalku@gmail.com
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='border m-2'></Row>
                <div className='text-center text-white p-5'>
                    <Row>
                        <Col className="d-flex justify-content-center gap-2 mb-3">
                            <FaInstagram className='social-btn' />
                            <FaFacebook className='social-btn' />
                            <FaYoutube className='social-btn' />
                            <FaTwitter className='social-btn' />
                        </Col>
                    </Row>
                    copyright 2024 @mentalku.id
                </div>
            </Container>
        </div>
        </>
    )
}
