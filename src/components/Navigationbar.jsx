import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Dropdown, DropdownButton, Image, Container } from 'react-bootstrap'
import Button1 from './Button1'

export default function Navigationbar() {
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
        } else if (route === '/home') {
            return 'KELUAR';
        } else {
            return '';
        }
    };

    const getLink = (route => {
        if (route === '/') {
            return '/masuk'
        } else if (route === '/home') {
            return '/'
        }
    })

    return (
        <>
            <div>
                <Container fluid>
                    <Row className='bg-white ps-3 pt-2 pb-2 pe-3'>
                        <Col className='d-flex align-items-center'>
                            <Image src='/images/logo.png' className='w-50' />
                        </Col>
                        <Col xl={6} className='d-flex align-items-center justify-content-center'>
                            <Col xl={2} className='d-flex justify-content-center align-items-center'>
                                Beranda
                            </Col>
                            <Col xl={2} className='d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className='bg-transparent text-black border-0'>
                                        Direktori
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Directori Penyakit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Direktori Obat</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col xl={3} className='d-flex justify-content-center align-items-center'>
                                Konsultasi Online
                            </Col>
                            <Col xl={2} className='d-flex justify-content-center align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className='bg-transparent text-black border-0'>
                                        Informasi
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Dokter dan Jadwal</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Profil Website</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Col>
                        <Col className='d-flex align-items-center justify-content-end'>
                            <Button1 textButton={getButtonText(activeRoute)} link={getLink(activeRoute)} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
