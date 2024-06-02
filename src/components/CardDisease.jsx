import React from 'react'
import { Image } from 'react-bootstrap'
import Button5 from './Button5'

import '../assets/styles/disease.css'

export default function CardDisease(props) {
    return (
        <>
            <div>
                <Image src={props.src} className='w-100 img-disease mb-3' />
                <div className='text-center fs-5 fw-medium mb-3'>
                    {props.text}
                </div>
                <Button5 link={props.link} />
            </div>
        </>
    )
}
