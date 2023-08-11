import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

function Login() {

    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/', {
                userid,
                password,
            })
            const { message, department } = response.data
            alert(response.data.alert);

            switch (department) {
                case 'account':
                    navigate('/account')
                    break;
                case 'sales':
                    navigate('/sales')
                    break;
                case 'hr':
                    navigate('/hr')
                    break;
                default:
                    navigate('/register')
                    break;
            }
        } catch (error) {
            console.error('Error during register', error.response.message);
        }
    }

    return (
        <div className='login'>
            <Container fluid className="d-flex align-items-center justify-content-center vh-100">
                <Card.Body>
                    <Row>
                        <Col md='10' lg='6' className='d-flex flex-column align-items-center'>

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">LOG IN </p>

                            <div className="d-flex flex-row align-items-center mb-4  w-50">
                                <Form.Text className="me-3">
                                    <i className="fas fa-envelope fa-lg"></i>
                                </Form.Text>
                                <Form.Control type='id' placeholder='User id' onChange={(e) => setUserid(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4  w-50">
                                <Form.Text className="me-3">
                                    <i className="fas fa-lock fa-lg"></i>
                                </Form.Text>
                                <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <Button onClick={handleLogin} className='mb-4' size='lg' variant='danger'>SIGN IN</Button>

                            <a style={{ color: 'black' }} >Click here to Register</a>

                        </Col>

                        <Col md='10' lg='5' className='d-flex align-items-center'>
                            <Card.Img src={logo} fluid="true" />
                        </Col>
                    </Row>
                </Card.Body>
            </Container>

        </div>
    )
}

export default Login