import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Dropdown, DropdownButton, Image, Container } from 'react-bootstrap'

import Button4 from './Button4'

import '../assets/styles/index.css'
import '../assets/styles/navbar.css'

export default function Navigationbar2() {
    const navigate = useNavigate()
    const [activeRoute, setActiveRoute] = useState(window.location.pathname)

    useEffect(() => {
        const handleRouteChange = () => {
            setActiveRoute(window.location.pathname);
        };
        window.addEventListener('popstate', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    const getButtonText = (route) => {
        if (route === '/') {
            return 'MASUK';
        } else if (route === '/home' || route === '/konsultasi-online' || route === '/jadwal-dokter' || route === '/profil-website' || route === '/direktori-penyakit' || route === '/direktori-penyakit/1' || route === '/direktori-penyakit/2' || route === '/direktori-penyakit/3' || route === '/direktori-penyakit/4' || route === '/direktori-penyakit/5' || route === '/direktori-penyakit/6' || route === '/direktori-obat') {
            return 'KELUAR';
        } else {
            return '';
        }
    };

    const getLink = (route => {
        if (route === '/') {
            return '/masuk'
        } else if (route === '/home' || route === '/konsultasi-online' || route === '/jadwal-dokter' || route === '/profil-website' || route === '/direktori-penyakit' || route === '/direktori-penyakit/1' || route === '/direktori-penyakit/2' || route === '/direktori-penyakit/3' || route === '/direktori-penyakit/4' || route === '/direktori-penyakit/5' || route === '/direktori-penyakit/6' || route === '/direktori-obat') {
            return '/'
        }
    })
    return (
        <>
            <div>
                <Container fluid>
                    <Row className='bg-pr-blue text-white ps-3 pt-2 pb-2 pe-3'>
                        <Col className='d-flex align-items-center'>
                            <Image src='/images/logo-2.png' className='w-50' />
                        </Col>
                        <Col xl={6} className='d-flex align-items-center justify-content-center'>
                            <Col xl={2} className='d-flex justify-content-center align-items-center'>
                                <Link to='/home' className='text-decoration-none text-white'>
                                    Beranda
                                </Link>
                            </Col>
                            <Col xl={2} className='d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0'>
                                        Direktori
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to='/direktori-penyakit' className='text-decoration-none text-black'>Direktori Penyakit</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/direktori-obat' className='text-decoration-none text-black'>Direktori Obat</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xl={3} className='d-flex justify-content-center align-items-center'>
                                <Link to='/konsultasi-online' className='text-decoration-none text-white'>
                                    Konsultasi Online
                                </Link>
                            </Col>
                            <Col xl={2} className='d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0'>
                                        Informasi
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link to='/jadwal-dokter' className='text-decoration-none text-black'>Dokter dan Jadwal</Link></Dropdown.Item>
                                        <Dropdown.Item><Link to='/profil-website' className='text-decoration-none text-black'>Profil Website</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Col>
                        <Col className='d-flex align-items-center justify-content-end'>
                            <Button4 textButton={getButtonText(activeRoute)} link={getLink(activeRoute)} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
