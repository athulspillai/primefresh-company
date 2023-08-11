import React,{useState} from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';


function Register() {

    const [username, setUsername] = useState()
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const [department, setDepartment] = useState()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/register', {
                username,
                userid,
                password,
                department,
            })
            alert(response.data.alert);
        } catch (error) {
            alert('Error during login:',error.response.data.message);
        }
    }

  return (
    <div className='register'>
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
        <Card.Body>
            <Form>
                <Row>
                    <Col md='10' lg='5' className='d-flex align-items-center'>
                        <Card.Img src={logo} fluid="true" />
                    </Col>

                    <Col md='10' lg='6' className='d-flex flex-column align-items-center'>

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up </p>

                        <div className="d-flex flex-row align-items-center w-50 mb-4">
                            <Form.Text className="me-3">
                                <i className="fas fa-user fa-lg"></i>
                            </Form.Text>
                            <Form.Control required type='text' placeholder='User name' className='w-100' onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4  w-50">
                            <Form.Text className="me-3">
                                <i className="fas fa-envelope fa-lg"></i>
                            </Form.Text>
                            <Form.Control required type='id' placeholder='User id' onChange={(e) => setUserid(e.target.value)} />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4  w-50">
                            <Form.Text className="me-3">
                                <i className="fas fa-lock fa-lg"></i>
                            </Form.Text>
                            <Form.Control required type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4  w-50">
                            <Form.Select className="me-" required type='text' placeholder='Department' onChange={(e) => setDepartment(e.target.value)} >
                                <i className="fas fa-envelope fa-lg"></i>
                                <option>Department</option>
                                <option value="sales">Sales</option>
                                <option value="hr">HR</option>
                                <option value="account">Accounts</option>
                            </Form.Select>
                        </div>

                        <Button onClick={(e) => handleSubmit(e)} className='mb-4' size='lg' variant='danger'>Register</Button>

                        <a style={{ color: 'black' }} >Click here to Login</a>

                    </Col>

                </Row>
            </Form>
        </Card.Body>
    </Container>

</div >
  )
}

export default Register