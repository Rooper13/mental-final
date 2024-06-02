import React from 'react'
import { Button } from 'react-bootstrap'

import '../assets/styles/button.css'
import { Link } from 'react-router-dom'

export default function Button5(props) {
    return (
        <>
            <Link to={props.link}>
                <Button className='btn-5'>BACA DISINI</Button>
            </Link>
        </>
    )
}
