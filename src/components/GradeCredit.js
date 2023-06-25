import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function GradeCredit({ id }) {
    return (
        <div className='grade-credit-input'>
            <Row>
                <Col>
                    <Form.Select aria-label="Default select example" id={`grade-${id}`}>
                        <option value='0'>Select Grade</option>
                        <option value="10">S</option>
                        <option value="9">A</option>
                        <option value="8">B</option>
                        <option value="7">C</option>
                        <option value="6">D</option>
                        <option value="5">E</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select aria-label="Default select example" id={`credit-${id}`}>
                        <option value='0'>Select Credits</option>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Col>
            </Row>
        </div>
    )
}

export default GradeCredit