import React from 'react'

import '../assets/styles/auth.css'
import '../assets/styles/index.css'

import { Card, Col, Container, Image, Row, Form } from 'react-bootstrap'
import Button3 from './Button3'
import AuthForm2 from './AuthForm2'
import { Link } from 'react-router-dom'

export default function ResetPasswordContent() {
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
                                    Reset Kata Sandi
                                </div>
                                <div className='mt-3 fs-5 fw-medium'>
                                    Masukkan kata sandi baru
                                </div>
                                <div className="mt-4">
                                    <Form>
                                        <AuthForm2 type='password' placeholder='Kata sandi baru' />
                                        <AuthForm2 type='password' placeholder='Konfirmasi kata sandi baru' />
                                        <Link to='/masuk'><Button3 text='Kirim' type='submit' /></Link>
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
