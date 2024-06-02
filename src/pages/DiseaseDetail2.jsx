import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import AnotherDiseaseTop from '../components/AnotherDiseaseTop'
import AnotherDiseaseBot from '../components/AnotherDiseaseBot'

export default function DiseaseDetail2() {
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
                                        Direktori Penyakit
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <Container className="p-5">
                <div>
                    <Image src='/images/bg-kecemasan umum.png' className='w-100 rounded-4' />
                </div>
                <Container>
                    <Row>
                        <Col xl={8} className='py-3'>
                            <div className="fw-semibold fs-4 my-3">
                                Kecemasan Umum (Anxiety)
                            </div>
                            <div>
                                Kecemasan umum atau anxiety adalah gangguan mental yang ditandai oleh perasaan cemas yang berlebihan, tidak terkendali, dan kronis terhadap berbagai situasi atau peristiwa dalam kehidupan sehari-hari. Orang yang mengalami kecemasan umum cenderung merasa khawatir secara terus-menerus tentang berbagai hal, bahkan ketika tidak ada ancaman konkret yang ada. Mereka mungkin merasa tegang, gelisah, dan sulit untuk rileks atau beristirahat. Gejala kecemasan umum bisa beragam, termasuk ketegangan otot, denyut jantung yang cepat, napas pendek, gangguan tidur, konsentrasi yang buruk, serta ketakutan akan hal-hal yang tidak rasional. Kecemasan umum dapat memengaruhi berbagai aspek kehidupan seseorang, termasuk kesehatan fisik, kesejahteraan emosional, hubungan interpersonal, dan kinerja di tempat kerja atau sekolah.
                            </div>
                        </Col>
                        <Col>
                            <div className='fw-semibold my-3 ms-2'>
                                Penyakit lainnya
                            </div>
                            <div className="mb-4">
                                <AnotherDiseaseTop src='/images/bg-bipolar-2.png' text='Bipolar' link='./../1' />
                            </div>
                            <div className="mb-4">
                                <AnotherDiseaseTop src='/images/bg-depresi-2.png' text='Depresi' link='./../3' />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-5">
                    <div>
                        <div className="text-center fw-semibold fs-4">
                            Penyakit lainnya
                        </div>
                        <Container className='mt-3'>
                            <Row>
                                <Col>
                                    <AnotherDiseaseBot src='/images/bg-skizo-2.png' text='Skizofrenia' link='./../4' />
                                </Col>
                                <Col>
                                    <AnotherDiseaseBot src='/images/bg-gangguan tidur-2.png' text='Gangguan Tidur' link='./../5' />
                                </Col>
                                <Col>
                                    <AnotherDiseaseBot src='/images/bg-ocd-2.png' text='Gangguan OCD' link='./../6' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Container>
            <Footer />
        </>
    )
}
