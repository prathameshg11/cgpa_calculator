import React from 'react'
import { Col, Container, Row, InputGroup } from 'react-bootstrap';
import GradeCredit from './GradeCredit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


function CalSgpa() {
    const [count, setCount] = useState(1);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        let inputValue = parseInt(e.target.value);
        inputValue = inputValue > 20 ? 20 : inputValue;
        setCount(isNaN(inputValue) ? 1 : inputValue);
    }

    const calcGpa = () => {
        let gpavalue = 0;
        let totalCredits = 0;
        for (let index = 0; index < count; index++) {
            const inputGrade = document.getElementById(`grade-${index}`).value;
            const inputCredit = document.getElementById(`credit-${index}`).value;
            const mul = parseInt(inputGrade) * parseInt(inputCredit);
            if (mul === 0) {
                alert(`insuficient data on ${index + 1}th row`);
                return;
            }
            gpavalue = gpavalue + mul;
            totalCredits = totalCredits + parseInt(inputCredit);
        }
        setResult(`${gpavalue / totalCredits}`);
        setShowResult(true);
    }
    return (
        <div id='credits'>
            <Container>
                <div className='main-text'>Calculate SGPA</div>
                <Row className='num-input'>
                    <Col xs={6} md={4} xl={4}>
                        <Form.Control
                            placeholder="Number of Subjects (1-20)"
                            type='number'
                            min={1}
                            max={20}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col >
                        <h4>Input number of subjects in semester</h4>
                    </Col>
                </Row>
                {[...Array(count)].map((_, index) => (
                    <GradeCredit key={index} id={index} />
                ))}
                <Row>
                    <Col xs={6} md={4} xl={4}>
                        <Button onClick={calcGpa} className='cal-btn'>Calculate SGPA</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {showResult && <Card className='result'>
                            <Card.Body>{result}</Card.Body>
                        </Card>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CalSgpa