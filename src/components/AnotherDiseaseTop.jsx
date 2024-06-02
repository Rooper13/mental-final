import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AnotherDiseaseTop(props) {
    return (
        <>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col xl={5}>
                        <Image src={props.src} className='w-100 rounded-3' />
                    </Col>
                    <Col className='text-start'>
                        <div className='mb-2 fw-semibold'>
                            {props.text}
                        </div>
                        <Link to={props.link} className='text-decoration-none'>See More</Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
