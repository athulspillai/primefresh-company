import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Link from 'react-router-dom'


function Hr() {

    const [hrusers, setHrUsers] = useState([])

    const fetchHrUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/hr/users')
            setHrUsers(response.data.user)
        } catch (error) {
            console.error('Error fetching hr users', error);
        }
    }

    console.log(hrusers);

    useEffect(() => {
        fetchHrUsers()
    },[])
    return (
        <div>
            <div className='container-fluid mt-5'>
                <h1 className='text-warning'> <i className='fa-solid fa-user-group '></i> HR DETAILS</h1>
                <p style={{ textAlign: 'justify' }}>
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                    This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data: This is dummy Data:This is dummy Data:This is dummy Data:This is dummy Data:
                </p>
            </div>
            <div className='container mt-2 mb-2'>
                <h1 className='text-warning mb-5'> HR (EMPLOYEES)</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hrusers?.map((user, index) =>(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.userid}</td>
                                    <td>{user.username}</td>
                                    <td>{user.department}</td>
                                    <td>
                                        <button className='btn btn-warning me-3'> <i class="fa-solid fa-eye"></i> </button>
                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Hr