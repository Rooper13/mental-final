import React from 'react'

import { Image, Card, Row, Col, Container, FloatingLabel, Form, Button, Modal } from 'react-bootstrap'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'

import '../assets/styles/index.css'

export default function DoctorSchedule() {
    return (
        <>
            <Navigationbar2 />
            <div>
                <Card className="text-white rounded-0 border-0">
                    <Card.Img src="/images/bg-konsultasi-1.png" alt="Card image" className='rounded-0 border-0' />
                    <Card.ImgOverlay className='d-flex align-items-center pt-5'>
                        <Container className='px-4'>
                            <Row className='border-start border-4 py-5 px-5'>
                                <Col className='d-inline justify-content-center'>
                                    <div className='fs-1-extra text-manrope fw-bolder ps-5'>
                                        Jadwal Dokter
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container className='p-5'>
                <Row className="gap-5">
                    <Col className="d-flex justify-content-end">
                        <Card className='w-75'>
                            <div className="p-4">
                                <Image src='images/dokter-1.png' className='w-100 rounded-top-2' />
                                <div className="bg-pr-blue p-3 text-white text-center fw-semibold">
                                    Dr. Agraini, Sp.KJ
                                </div>
                                <div className='text-center mt-3'>
                                    Spesialis Kesehatan Mental
                                </div>
                                <hr />
                                <div className="text-center">
                                    Senin dan Selasa (13.00 - 16.00)
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col className="">
                        <Card className='w-75'>
                            <div className="p-4">
                                <Image src='images/dokter-2.png' className='w-100 rounded-top-2' />
                                <div className="bg-pr-blue p-3 text-white text-center fw-semibold">
                                    Dr. Cinta Yuni Pratami, Sp. KJ
                                </div>
                                <div className='text-center mt-3'>
                                    Spesialis Kesehatan Mental
                                </div>
                                <hr />
                                <div className="text-center">
                                    Rabu dan Kamis (08.00 - 15.00)
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
