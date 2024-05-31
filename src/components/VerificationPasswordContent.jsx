import React from 'react'

import '../assets/styles/auth.css'
import '../assets/styles/index.css'

import { Card, Col, Container, Image, Row, Form } from 'react-bootstrap'
import Button3 from './Button3'
import AuthForm2 from './AuthForm2'
import { Link } from 'react-router-dom'

export default function VerificationPasswordContent() {
    return (
        <>
            <Container className=''>
                <Card className='bg-blue-sec rounded-2'>
                    <Row>
                        <Col>
                            <Image src='images/bg-login.png' className='w-100 rounded-2' />
                        </Col>
                        <Col className='d-flex align-items-center pe-5'>
                            <Container>
                                <div className='fs-3 fw-semibold text-center'>
                                    Verifikasi
                                </div>
                                <div className='mt-3 fs-5 fw-medium'>
                                    Masukkan kode yang diterima di email anda.
                                </div>
                                <div className="mt-4">
                                    <Form>
                                        <AuthForm2 type='number' placeholder='Masukkan kode' />
                                        <Link to='/reset-sandi'><Button3 text='Memeriksa' type='submit' /></Link>
                                        <div className='fs-7 mt-2 text-center'>
                                            Tidak menerima kode? <Link to='' className='text-pr-blue text-decoration-none'>Kirim ulang sekarang</Link>
                                        </div>
                                    </Form>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
