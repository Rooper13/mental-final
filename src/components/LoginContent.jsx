import React from 'react'

import '../assets/styles/auth.css'
import '../assets/styles/index.css'

import { Card, Col, Container, Image, Row, Form } from 'react-bootstrap'
import AuthForm from './AuthForm'
import Button2 from './Button2'
import { Link } from 'react-router-dom'

export default function LoginContent() {
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
                                <div className='fs-3 fw-semibold'>
                                    Masuk
                                </div>
                                <div className='mt-2'>
                                    Hai! Selamat datang kembali!
                                </div>
                                <div className="mt-4">
                                    <Form>
                                        <AuthForm formLabel='Alamat Email' type='email' />
                                        <AuthForm formLabel='Kata Sandi' type='password' />
                                        <Row className="d-flex mt-3 mb-5 align-items-center">
                                            <Col>
                                                <Form.Check type='checkbox' id='checkbox' label='Ingat saya' className='fs-7' />
                                            </Col>
                                            <Col className='text-end fs-7'>
                                                <Link to='/lupa-sandi' className='text-pr-blue text-decoration-none'>Lupa Kata Sandi?</Link>
                                            </Col>
                                        </Row>
                                        <Button2 text='Masuk' type='submit' />
                                        <div className='fs-7 mt-2'>
                                            Belum punya akun? <Link to='/daftar' className='text-pr-blue text-decoration-none'>Daftar</Link>
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
