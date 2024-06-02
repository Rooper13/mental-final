import React, { useState } from 'react'

import { Image, Card, Row, Col, Container, FloatingLabel, Form, Button, Modal } from 'react-bootstrap'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'
import CardMedicine from '../components/CardMedicine'

export default function MedicineDirectory() {
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
                                    <div className='fs-1-extra text-manrope fw-bolder'>
                                        Direktori Obat
                                    </div>
                                    <div className='fs-3 mt-3 fw-semibold'>
                                        Pelajari dan Pahami
                                    </div>
                                    <div className='fs-4 mt-3'>
                                        Jenis obat penyakit mental yang dapat memberikan pengetahuan yang baru untuk anda !
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container className="p-5">
                <Row xs={1} md={3} className='g-4'>
                    <Col>
                        <CardMedicine src='/images/sulpride.png' text='SULPRIDE' />
                    </Col>
                    <Col>
                        <CardMedicine src='/images/tifluoperazine.png' text='TIFLUOPERAZINE' />
                    </Col>
                    <Col>
                        <CardMedicine src='/images/sikzonoate.png' text='SIKZONOATE' />
                    </Col>
                    <Col>
                        <CardMedicine src='/images/antisoksida.png' text='ANTISOKSIDA' />
                    </Col>
                    <Col>
                        <CardMedicine src='/images/aripiprazole.png' text='ARIPIPRAZOLE' />
                    </Col>
                    <Col>
                        <CardMedicine src='/images/fluoexetine.png' text='FLUOEXETINE' />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
