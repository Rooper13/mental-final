import React, { useState } from 'react'

import { Image, Card, Row, Col, Container, FloatingLabel, Form, Button, Modal } from 'react-bootstrap'
import Navigationbar2 from '../components/Navigationbar2'

import '../assets/styles/index.css'
import '../assets/styles/konsultasi.css'
import Footer from '../components/Footer'
import { FaRegUser } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdWorkOutline } from 'react-icons/md'
import { FaQuestion } from 'react-icons/fa6'

export default function OnlineConsultation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                        Konsultasi Online
                                    </div>
                                    <div className='fs-4 mt-3'>
                                        Saya mengundangmu untuk mengambil langkah pertama dengan konsultasi psikolog online. Bersama, kita dapat menemukan solusi dan menghadapi tantangan hidup dengan lebih baik. Jangan ragu untuk mencari bantuan, karena kita tidak sendirian dalam perjalanan ini.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container className='py-5'>
                <div className='card-cons d-flex justify-content-center align-items-center'>
                    <div className='w-100'>
                        <div className="text-center fs-4 fw-medium mb-2">
                            Konsultasi Online
                        </div>
                        <div className='d-flex justify-content-center mb-2'>
                            <div className="line-1"></div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="line-2"></div>
                        </div>
                        <div className='mt-5'>
                            <Row className='gap-5'>
                                <Col>
                                    <div className="d-flex align-items-center gap-4 mb-4">
                                        <div className='cons-icon'>
                                            <FaRegUser />
                                        </div>
                                        <FloatingLabel controlId="floatingInput" label="Nama" className="mb-3 w-100">
                                            <Form.Control type="text" placeholder="Nama" className='cons-form' />
                                        </FloatingLabel>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className='cons-icon'>
                                            <MdWorkOutline className='fs-5' />
                                        </div>
                                        <FloatingLabel controlId="floatingInput" label="Pekerjaan" className="mb-3 w-100">
                                            <Form.Control type="text" placeholder="Pekerjaan" className='cons-form' />
                                        </FloatingLabel>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="d-flex align-items-center gap-4 mb-4">
                                        <div className='cons-icon'>
                                            <HiOutlineMail className='fs-5' />
                                        </div>
                                        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 w-100">
                                            <Form.Control type="email" placeholder="Email" className='cons-form' />
                                        </FloatingLabel>
                                    </div>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className='cons-icon'>
                                            <FaQuestion />
                                        </div>
                                        <FloatingLabel controlId="floatingInput" label="Keluhan" className="mb-3 w-100">
                                            <Form.Control type="text" placeholder="Keluhan" className='cons-form' />
                                        </FloatingLabel>
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-5 d-flex justify-content-center gap-3">
                                <Button className='btn-cons-1'>Batal</Button>
                                <Button className='btn-cons-2' onClick={handleShow}>Kirim</Button>
                                <Modal show={show} onHide={handleClose} centered>
                                    <Modal.Body>
                                        Konsultasi Berhasil, silahkan menunggu jawaban yang akan dikirim melalui email.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" className='btn-cons-2' onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className='py-5'>
                <div className='card-cons d-flex justify-content-center align-items-center'>
                    <div className='w-100'>
                        <div className="text-center fs-4 fw-medium mb-2">
                            Petunjuk Konsultasi
                        </div>
                        <div className='d-flex justify-content-center mb-2'>
                            <div className="line-1"></div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className="line-2"></div>
                        </div>
                        <div className='mt-5'>
                            <div className="text-pr-blue fs-5 fw-medium">
                                1. Lengkapi Form Pendaftaran Di Atas
                            </div>
                            <div className='mb-4'>
                                Masukkan Nama, Pekerjaan, Email dan keluhan anda. Email wajib menggunakan email yang masih aktif karena email ini untuk menerima jawaban dari konultasi anda.
                            </div>
                            <div className="text-pr-blue fs-5 fw-medium">
                                2. Cek Kembali Data
                            </div>
                            <div className='mb-4'>
                                Cek kembali data yang anda input. Pastikan semua benar.
                            </div>
                            <div className="text-pr-blue fs-5 fw-medium">
                                3. Submit Data
                            </div>
                            <div className="mb-4">
                                Setelah data yang anda input benar klik tombol “kirim”, setelah data terkirim. Admin akan menjawab keluhan anda dan mengirim jawabannya melalui email anda.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
