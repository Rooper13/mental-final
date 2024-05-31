import React from 'react'
import { Button } from 'react-bootstrap'

import '../assets/styles/button.css'

export default function Button3(props) {
    return (
        <>
            <Button className='btn-3 w-100 py-3 mt-3' type={props.type}>
                {props.text}
            </Button>
        </>
    )
}
