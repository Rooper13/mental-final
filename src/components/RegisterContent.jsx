import React from 'react'

import '../assets/styles/auth.css'
import '../assets/styles/index.css'

import { Card, Col, Container, Image, Row, Form } from 'react-bootstrap'
import AuthForm from './AuthForm'
import Button2 from './Button2'
import { Link } from 'react-router-dom'

export default function RegisterContent() {
    return (
        <>

            <Container className=''>
                <Card className='bg-blue-sec rounded-2'>
                    <Row>
                        <Col className='d-flex align-items-center ps-5 py-4'>
                            <Container>
                                <div className='fs-3 fw-semibold'>
                                    Daftar
                                </div>
                                <div className='mt-2'>
                                    Hai! Selamat datang kembali!
                                </div>
                                <div className="mt-4">
                                    <Form>
                                        <AuthForm formLabel='Nama' type='text' />
                                        <AuthForm formLabel='Alamat Email' type='email' />
                                        <AuthForm formLabel='Kata Sandi' type='password' />
                                        <AuthForm formLabel='Konfirmasi Kata Sandi' type='password' />
                                        <Button2 text='Daftar' type='submit' />
                                        <div className='fs-7 mt-2'>
                                            Sudah punya akun? <Link to='/masuk' className='text-pr-blue text-decoration-none'>Masuk</Link>
                                        </div>
                                    </Form>
                                </div>
                            </Container>
                        </Col>
                        <Col>
                            {/* <Image src='images/bg-login.png' className='rounded-2' width={500} /> */}
                            <Image src='images/bg-login.png' className='rounded-2' width={585} />
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
