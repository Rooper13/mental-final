import React from 'react'
import { Button } from 'react-bootstrap'

import '../assets/styles/button.css'

export default function Button2(props) {
    return (
        <>
            <Button className='btn-2' type={props.type}>
                {props.text}
            </Button>
        </>
    )
}
