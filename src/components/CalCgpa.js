import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SgpaCredits from './SgpaCredits';
import Card from 'react-bootstrap/Card';

function CalCgpa() {
  const [count, setCount] = useState(1);
  const [ showResult, setShowResult ] = useState(false);
  const [ result, setResult ] = useState('');

  const handleChange = (e) => {
    let inputValue = parseInt(e.target.value);
    inputValue = inputValue > 10 ? 10 : inputValue;
    setCount(isNaN(inputValue) ? 1 : inputValue);
  }

  const CalAns = () => {
    let gpavalue = 0;
    let totalCredits = 0;
    for (let index = 0; index < count; index++) {
      const inputSgpa = document.getElementById(`sgpa-${index}`).value;
      const inputTotalCredit = document.getElementById(`totalCredits-${index}`).value;
      if (inputSgpa === '' || inputTotalCredit === '') {
        alert(`insuficient data on ${index + 1}th row`);
        return;
      }
      const mul = parseFloat(inputSgpa) * parseInt(inputTotalCredit);
      gpavalue = gpavalue + mul;
      totalCredits = totalCredits + parseInt(inputTotalCredit);

    }

    setResult(`${gpavalue / totalCredits}`);
    setShowResult(true);
  }


  return (
    <div>
      <Container>
      <div className='main-text'>Calculate CGPA</div>
        <Row className='num-input'>
          <Col xs={6} md={4} xl={4}>
            <Form.Control
              placeholder="No. of semsters"
              type='number'
              min={1}
              max={10}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <h4>Input total number of semesters completed</h4>
          </Col>
        </Row>
        {[...Array(count)].map((_, index) => (
          <SgpaCredits key={index} id={index} />
        ))}
        <Row>
          <Col xs={6} md={4} xl={4}>
            <Button onClick={CalAns} className='cal-btn'>Calculate CGPA</Button>
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

export default CalCgpa