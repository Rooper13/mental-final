import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AnotherDiseaseBot(props) {
    return (
        <>
            <Container className='d-flex justify-content-center'>
                <div>
                    <Image src={props.src} className='rounded-3 mb-3' width={200} />
                    <div className='mb-2 fw-semibold'>
                        {props.text}
                    </div>
                    <Link to={props.link} className='text-decoration-none'>See More</Link>
                </div>
            </Container>
        </>
    )
}
