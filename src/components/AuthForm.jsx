import React from 'react'

import Form from 'react-bootstrap/Form';

export default function AuthForm(props) {
    return (
        <>
            <Form.Group className="mb-3" controlId={props.controId}>
                <Form.Label className='fw-medium'>{props.formLabel}</Form.Label>
                <Form.Control className='auth-form' type={props.type} placeholder={props.placeholder} />
            </Form.Group>
        </>
    )
}
