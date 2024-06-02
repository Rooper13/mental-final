import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import AnotherDiseaseTop from '../components/AnotherDiseaseTop'
import AnotherDiseaseBot from '../components/AnotherDiseaseBot'

export default function DiseaseDetail1() {
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
                    <Image src='/images/bg-bipolar.png' className='w-100 rounded-4' />
                </div>
                <Container>
                    <Row>
                        <Col xl={8} className='py-3'>
                            <div className="fw-semibold fs-4 my-3">
                                Bipolar
                            </div>
                            <div>
                                Bipolar adalah gangguan suasana hati yang ditandai dengan perubahan suasana hati yang ekstrem antara periode mania yang tinggi dan periode depresi yang rendah. Orang dengan gangguan bipolar dapat mengalami episode mania, di mana mereka merasa sangat bersemangat, energik, impulsif, dan mungkin memiliki pandangan diri yang terlalu tinggi. Di sisi lain, mereka juga mengalami episode depresi, di mana mereka merasa sedih, putus asa, kehilangan minat atau kesenangan pada aktivitas sehari-hari, dan mungkin mengalami gangguan tidur atau makan. Gangguan bipolar terbagi menjadi beberapa jenis, termasuk bipolar I, bipolar II, dan cyclothymic disorder. Pengobatan untuk bipolar meliputi terapi psikologis, obat-obatan stabilisator suasana hati, dan kadang-kadang terapi elektrokonvulsif untuk kasus yang lebih parah. Penting untuk mendapatkan diagnosis dan pengobatan yang tepat jika seseorang mengalami gejala bipolar agar dapat mengelola kondisi mereka dengan baik.
                            </div>
                        </Col>
                        <Col>
                            <div className='fw-semibold my-3 ms-2'>
                                Penyakit lainnya
                            </div>
                            <div className="mb-4">
                                <AnotherDiseaseTop src='/images/bg-kecemasan umum-2.png' text='Kecemasan Umum' link='./../2' />
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
