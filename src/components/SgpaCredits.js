import React from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row, InputGroup } from 'react-bootstrap';


function SgpaCredits({ id }) {
    return (
        <div className='grade-credit-input'>
            <Row>
                <Col>
                    <Form.Control placeholder='SGPA upto 2 decimal places e.g. (8.23)' type='number' step={0.01} id={`sgpa-${id}`}/>
                </Col>
                <Col>
                    <Form.Control placeholder='Total number of credits in semester' type='number' id={`totalCredits-${id}`}/>
                </Col>
            </Row>
        </div>
    )
}

export default SgpaCredits