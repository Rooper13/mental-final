import React from 'react'
import Navigationbar2 from '../components/Navigationbar2'
import Footer from '../components/Footer'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import AnotherDiseaseTop from '../components/AnotherDiseaseTop'
import AnotherDiseaseBot from '../components/AnotherDiseaseBot'

export default function DiseaseDetail6() {
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
                    <Image src='/images/bg-ocd.png' className='w-100 rounded-4' />
                </div>
                <Container>
                    <Row>
                        <Col xl={8} className='py-3'>
                            <div className="fw-semibold fs-4 my-3">
                                Gangguan Obsessive-Compulsive Disorder (OCD)
                            </div>
                            <div>
                            Obsesif-Kompulsif Disorder (OCD) adalah gangguan mental yang ditandai oleh adanya obsesi yang tidak diinginkan dan kuat, serta kompulsi yang tak terhindarkan dan berulang. Obsesi adalah pikiran, dorongan, atau gambar yang menimbulkan kecemasan atau ketidaknyamanan yang signifikan, sedangkan kompulsi adalah perilaku atau tindakan yang dilakukan untuk meredakan kecemasan yang disebabkan oleh obsesi, meskipun seringkali tidak masuk akal atau tidak efektif. Gejala obsesi OCD dapat beragam, tetapi beberapa contoh meliputi ketakutan akan kontaminasi, ketakutan akan kecelakaan atau kesalahan, kebutuhan untuk simetri atau ketertiban yang sempurna, atau pikiran intrusif tentang hal-hal yang bertentangan dengan nilai atau keyakinan pribadi. Kompulsi dapat berupa perilaku fisik seperti mencuci tangan berulang kali, memeriksa atau menghitung hal-hal berulang kali, atau melakukan ritual tertentu secara berulang.
                            </div>
                        </Col>
                        <Col>
                            <div className='fw-semibold my-3 ms-2'>
                                Penyakit lainnya
                            </div>
                            <div className="mb-4">
                                <AnotherDiseaseTop src='/images/bg-bipolar-2.png' text='Kecemasan Umum' link='./../1' />
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
                                    <AnotherDiseaseBot src='/images/bg-skizo-2.png' text='Skizofrenia' link='./../4' />
                                </Col>
                                <Col>
                                    <AnotherDiseaseBot src='/images/bg-gangguan tidur-2.png' text='Gangguan Tidur' link='./../5' />
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
