import React from 'react'
import { Card, Image } from 'react-bootstrap'

import '../assets/styles/medicine.css'

export default function CardMedicine(props) {
    return (
        <>
        <Card className='p-4 card-med rounded-4'>
            <Image src={props.src} className='rounded-3' />
            <div className='mt-3 fs-5 fw-medium text-center'>
                {props.text}
            </div>
        </Card>
        </>
    )
}
