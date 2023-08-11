import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'


function Account() {

    const [accountUsers, setAccountUsers] = useState([])

    const fetchAccountUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/account/users')
            setAccountUsers(response.data.user)
        } catch (error) {
            console.error('Error fetching account users', error);
        }
    }

    console.log(accountUsers);

    useEffect(() => {
        fetchAccountUsers()
    })
    return (
        <div>
            <div className='container-fluid mt-5'>
                <h1 className='text-warning'> <i className='fa-solid fa-user-group'></i> ACCOUNTS DETAILS</h1>
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
                <h1 className='text-warning mb-5'> ACCOUNTS (EMPLOYEES)</h1>
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
                            accountUsers?.map((user, index) => (
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

export default Account