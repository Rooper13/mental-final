import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import AnotherDiseaseTop from '../components/AnotherDiseaseTop'
import AnotherDiseaseBot from '../components/AnotherDiseaseBot'

export default function DiseaseDetail4() {
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
                    <Image src='/images/bg-skizo.png' className='w-100 rounded-4' />
                </div>
                <Container>
                    <Row>
                        <Col xl={8} className='py-3'>
                            <div className="fw-semibold fs-4 my-3">
                                Skizofrenia
                            </div>
                            <div>
                                Skizofrenia adalah gangguan mental serius yang memengaruhi pemikiran, perasaan, dan perilaku seseorang. Ini adalah kondisi kompleks yang dapat memunculkan gejala yang bervariasi dari individu ke individu. Gejala skizofrenia sering kali terjadi dalam episode yang disebut episode psikotik, yang dapat melibatkan delusi (keyakinan yang tidak sesuai dengan kenyataan) dan halusinasi (persepsi sensorik yang tidak ada).Diagnosis skizofrenia didasarkan pada gejala-gejala klinis yang meliputi delusi, halusinasi, pikiran kacau atau disorganisasi, bicara yang tidak teratur, perilaku yang terganggu, serta disfungsi dalam fungsi sosial atau pekerjaan. Gejala ini dapat berkembang secara bertahap atau muncul secara tiba-tiba, dan sering kali berlangsung selama berbulan-bulan atau bahkan bertahun-tahun.
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
                                <AnotherDiseaseTop src='/images/bg-kecemasan umum-2.png' text='Kecemasan Umum' link='./../2' />
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
                                    <AnotherDiseaseBot src='/images/bg-depresi-2.png' text='Depresi' link='./../3' />
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
