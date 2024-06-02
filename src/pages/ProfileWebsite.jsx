import React, { useState } from 'react'

import { Image, Card, Row, Col, Container, FloatingLabel, Form, Button, Modal } from 'react-bootstrap'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'

import '../assets/styles/index.css'

export default function ProfileWebsite() {
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
                                        Profil Website
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container className="my-5 p-5 bg-white">
                <div>
                    <div className='d-flex justify-content-center mb-2'>
                        <div className="line-1"></div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="line-2"></div>
                    </div>
                </div>
                <Container className='mt-5'>
                    <Row className='d-flex justify-content-center align-items-center gap-4'>
                        <Col className='d-flex justify-content-center'>
                            <Image src='images/logo.png' className='w-100' />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <div>
                                <div className="text-center text-pr-blue fw-bold fs-3 mb-4">
                                    Tentang Mentalku.com
                                </div>
                                <div>
                                    Salah satu website pelayanan Kesehatan Mental yang akan membuat pengguna menikmati layanan kesehatan mental secara online dan akan mempengaruhi pengidap untuk segera konsultasi kepada para ahli agar mengetahui diagnosa penyakitnya secara mudah dan tentunya tanpa dipungut biaya apapun atau gratis. Website ini juga memberikan edukasi seputar kesehatan mental dari pengertian, gejala, jenis, dan cara menangani sebelum terlambat, sehingga orang akan lebih teredukasi dan berhati-hati sedari awal.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <div>
                        <div className="text-center text-pr-blue fw-bold fs-3">
                            Visi & Misi
                        </div>
                        <div className='d-flex justify-content-center mb-2 mt-2'>
                            <div className="line-1"></div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="line-2"></div>
                        </div>
                        <Container className="mt-5">
                            <div className='fs-5 fw-semibold text-pr-blue'>
                                Visi
                            </div>
                            <div>
                                Menjadi sumber utama bagi individu yang mencari bantuan dan panduan dalam berbagai aspek kehidupan mereka melalui konsultasi online yang mudah diakses dan gratis.
                            </div>
                            <div className='mt-3 fs-5 fw-semibold text-pr-blue'>
                                Misi
                            </div>
                            <div>
                                <ol>
                                    <li>Memberikan akses mudah dan gratis bagi individu dari berbagai latar belakang untuk berkonsultasi tentang permasalahan yang mereka hadapi.</li>
                                    <li>Menyediakan platform yang aman dan terpercaya untuk berbagi pengalaman, pengetahuan, dan saran kepada mereka yang membutuhkan.</li>
                                    <li>Mempromosikan kesehatan mental dan kesejahteraan secara luas dengan menyediakan konseling dan panduan yang mendalam.</li>
                                    <li>MMenghubungkan para konselor profesional dengan individu yang membutuhkan bantuan, memfasilitasi pertukaran informasi yang bermanfaat dan berdampak positif.</li>
                                    <li>Berkomitmen untuk menjaga keragaman dan inklusi, menghormati dan memahami keberagaman budaya, latar belakang, dan kebutuhan individu yang mencari bantuan.</li>
                                    <li>Terus mengembangkan dan meningkatkan layanan kami berdasarkan umpan balik dari pengguna, untuk memastikan kepuasan dan kebermanfaatan yang maksimal.</li>
                                </ol>
                            </div>
                        </Container>
                    </div>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
