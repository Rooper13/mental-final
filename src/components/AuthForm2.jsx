import React from 'react'

import Form from 'react-bootstrap/Form';

export default function AuthForm2(props) {
    return (
        <>
            <Form.Group className="mb-3" controlId={props.controId}>
                <Form.Control className='auth-form p-3' type={props.type} placeholder={props.placeholder} />
            </Form.Group>
        </>
    )
}
