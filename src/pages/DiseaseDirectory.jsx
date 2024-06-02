import React, { useState } from 'react'

import { Image, Card, Row, Col, Container, FloatingLabel, Form, Button, Modal } from 'react-bootstrap'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'
import CardDisease from '../components/CardDisease'

export default function DiseaseDirectory() {
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
                                        Direktori Penyakit
                                    </div>
                                    <div className='fs-3 mt-3 fw-semibold'>
                                        Pelajari dan Pahami
                                    </div>
                                    <div className='fs-4 mt-3'>
                                        Jenis penyakti mental yang dapat memberikan pengetahuan yang baru untuk anda!
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
                        <CardDisease src='images/bipolar.png' text='Bipolar' link='./1' />
                    </Col>
                    <Col>
                        <CardDisease src='images/kecemasan umum.png' text='Kecemasan Umum' link='./2' />
                    </Col>
                    <Col>
                        <CardDisease src='images/depresi.png' text='Depresi' link='./3' />
                    </Col>
                    <Col>
                        <CardDisease src='images/skizo.png' text='Skizofrenia' link='./4' />
                    </Col>
                    <Col>
                        <CardDisease src='images/gangguan tidur.png' text='Gangguan Tidur' link='./5' />
                    </Col>
                    <Col>
                        <CardDisease src='images/ocd.png' text='Obsessive-Compulsive Disorder' link='./6' />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
