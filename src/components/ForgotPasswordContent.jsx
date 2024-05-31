import React from 'react'

import '../assets/styles/auth.css'
import '../assets/styles/index.css'

import { Card, Col, Container, Image, Row, Form } from 'react-bootstrap'
import Button3 from './Button3'
import AuthForm2 from './AuthForm2'
import { Link } from 'react-router-dom'

export default function ForgotPasswordContent() {
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
                  Lupa Kata Sandi?
                </div>
                <div className='mt-5 fs-5 fw-medium'>
                  Masukkan alamat email yang terkait dengan akun anda untuk mendapatkan kode.
                </div>
                <div className="mt-5">
                  <Form>
                    <AuthForm2 type='email' placeholder='Masukan alamat email' />
                    <Link to='/verifikasi-sandi'><Button3 text='Kirim Kode' type='submit' /></Link>
                    <div className='fs-7 mt-2 text-center'>
                      <Link to='/masuk' className='text-pr-blue text-decoration-none'>Kembali untuk masuk</Link>
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
