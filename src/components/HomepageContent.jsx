import React from 'react'
import { Image, Card, Row, Col, Container } from 'react-bootstrap'
import Button1 from './Button1'

import '../assets/styles/homepage.css'
import '../assets/styles/index.css'
import { FaAngleRight } from 'react-icons/fa6'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function HomepageContent() {
    return (
        <>

            <div>
                <Card className="text-white rounded-0">
                    <Card.Img src="/images/bg-home-1.png" alt="Card image" className='rounded-0' />
                    <Card.ImgOverlay className='d-inline align-items-center pt-5'>
                        <Row>
                            <Col xl={5} className='d-inline justify-content-center'>
                                <Image src='images/mk.png' />
                                <div className='text-center fs-4 mt-3'>
                                    Kesehatan bukan hanya tentang apa yang kamu makan. Ini tentang apa yang kamu pikirkan dan rasakan juga. Konsultasi sekarang juga secara gratis!
                                </div>
                                <div className='d-flex justify-content-center align-items-center mt-3'>
                                    <Button1 textButton="KONSULTASI" link='/konsultasi-online' />
                                </div>
                            </Col>
                        </Row>
                    </Card.ImgOverlay>
                </Card>

                <Container className='pt-5 pb-5'>
                    <div className='text-center text-manrope fw-bold fs-5'>
                        Mengapa?
                    </div>
                    <div className='fw-semibold fs-2 mt-4 text-center pe-5 ps-5 text-manrope'>
                        <div className='ms-5 me-5'>
                            Mengapa Konsultasi Kesehatan Mental Kami adalah Pilihan Terbaik
                        </div>
                    </div>

                    <Row className="mt-5 d-flex justify-content-center align-items-center">
                        <Col className='border border-black border-end-0 rounded-start-5 d-grid justify-content-center align-items-center side-content'>
                            <div className='text-center'>
                                <Image src='images/psychologist.png' />
                                <div className='text-center fw-bold fs-4 mt-4 text-manrope'>
                                    Fleksibel
                                </div>
                                <div className='text-center mt-3 fs-7'>
                                    Pasien dapat melakukan konsultasi di manapun dan kapanpun tanpa perlu datang ke klinik atau rumah sakit. Selain itu, layanan ini juga buka 24 jam. Jadi, di tengah kesibukan pun, pasien bisa tetap konsultasi dengan dokter terkait keluhan penyakitnya.
                                </div>
                            </div>
                        </Col>

                        <Col className='border border-black rounded-5 p-4 bg-pr-blue text-white d-grid justify-content-center align-items-center main-content'>
                            <div className='text-center'>
                                <Image src='images/gratis.png' />
                                <div className='text-center fw-bold fs-3 mt-4 text-manrope'>
                                    Gratis
                                </div>
                                <div className='text-center mt-3'>
                                    Pasien dapat melakukan sesi tanya jawab dengan dokter profesional kapanpun dan di manapun secara gratis. Tentu hal ini sangat bermanfaat, terutama bagi masyarakat menengah ke bawah.
                                </div>
                            </div>
                        </Col>

                        <Col className='border border-black border-start-0 rounded-end-5 d-grid justify-content-center align-items-center side-content'>
                            <div className='text-center justify-content-center'>
                                <Image src='images/pendulum.png' />
                                <div className='text-center fw-bold fs-4 mt-4 text-manrope'>
                                    Fitur Lengkap
                                </div>
                                <div className='text-center mt-3 fs-7'>
                                    Tidak hanya konsultasi, disini juga ada edukasi seputar kesehatan mental, dan peresepan obat (bila perlu).
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="pb-5 pt-5">
                    <div className='fw-semibold fs-2 mt-4 pe-5 text-manrope'>
                        Kami membantu orang - orang yang hidup dengan berbagai kondisi kesehatan mental.
                    </div>
                    <Row className='mt-5'>
                        <Col xl={4} className=''>
                            <Image src='images/gangguan tidur.png' className='w-100 mental-img' />
                            <div className='text-center mt-2 fs-5 fw-medium'>
                                Gangguan Tidur
                            </div>
                        </Col>
                        <Col xl={4} className=''>
                            <Image src='images/bipolar.png' className='w-100 mental-img' />
                            <div className='text-center mt-2 fs-5 fw-medium'>
                                Bipolar
                            </div>
                        </Col>
                        <Col xl={4} className=''>
                            <Image src='images/kecemasan umum.png' className='w-100 mental-img' />
                            <div className='text-center mt-2 fs-5 fw-medium'>
                                Kecemasan Umum
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="pt-5 position-relative mt-5">
                    <Image src='images/bg-home-2.png' className='img-bg' />
                    <div className='text-overlay'>
                        <div className="d-flex">
                            <Container className='d-flex gap-5 justify-content-center'>
                                <Col xl={1}></Col>
                                <Col xl={4} className="d-flex justify-content-end">
                                    <div className="logo-content d-flex justify-content-center align-items-center">
                                        <Image src='images/logo.png' className='w-75' />
                                    </div>
                                </Col>
                                <Col xl={6} className="d-flex align-items-end pe-5">
                                    <div className='fs-2 fw-bold text-manrope'>
                                        Mentalku.com
                                        <div className='fs-5 fw-normal mt-3'>
                                            Salah satu website pelayanan Kesehatan Mental yang akan membuat pengguna menikmati layanan kesehatan mental secara online dan akan mempengaruhi pengidap untuk segera konsultasi kepada para ahli agar mengetahui diagnosa penyakitnya secara mudah dan tentunya tanpa dipungut biaya apapun atau gratis. Website ini juga memberikan edukasi seputar kesehatan mental dari pengertian, gejala, jenis, dan cara menangani sebelum terlambat, sehingga orang akan lebih teredukasi dan berhati-hati sedari awal.
                                        </div>
                                    </div>
                                </Col>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className="position-relative">
                    <Image src='images/bg-home-3.png' className='img-bg' />
                    <div className='text-overlay position-absolute top-50 start-50 translate-middle'>
                        <Container>
                            <Card className='rounded-4'>
                                <Row>
                                    <Col xl={5} className=''>
                                        <Image src='images/pengetahuan.png' width={460} className='rounded-4' />
                                    </Col>
                                    <Col className='d-flex align-items-center justify-content-center p-5'>
                                        <div className='text-manrope fs-2 text-center p-5'>
                                            KOLEKSI PENGETAHUAN
                                            <div className='text-start text-manrope fw-medium mt-5'>
                                                Pelajari dan Pahami Kesahatan Mental
                                            </div>
                                            <div className='text-start fs-6 fw-normal mt-3'>
                                                Jelajahi koleksi pengetahuan dan temukan jawaban dari semua pertanyanmu mengenai kesehatan mental
                                            </div>
                                            <div className='text-start fs-6 fw-medium mt-3'>
                                                Kunjungi Koleksi Pengetahuan <FaAngleRight />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Container>
                    </div>
                </div>

                <Container className="pb-5 pt-5">
                    <div className="card-quote-1">
                        <div className='border card-quote fs-2 fw-bold text-center text-manrope'>
                            <div className='position-relative ps-4 pe-4'>
                                <FaQuoteLeft className='position-absolute top-0 start-0' />
                                Perawatan diri bukanlah sebuah kemewahan. Itu sudah keharusan. Tanpanya, kita tidak bisa menjadi diri kita yang terbaik, secara mental, emosional, atau fisik.
                                <FaQuoteRight className='position-absolute bottom-0 end-0' />
                            </div>
                        </div>
                    </div>
                </Container>

                <Container className="pb-5 pt-5">
                    <div className="fw-bold fs-5">
                        Galeri
                    </div>
                    <div className="fw-bold fs-3 mt-3">
                        Kesehatan Mental di seluruh dunia
                    </div>
                    <div className='mt-3'>
                        <Image src='images/all photo.png' className='w-100' />
                    </div>
                </Container>
            </div>
        </>
    )
}
