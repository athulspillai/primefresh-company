import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'


function Sales() {

    const [salesUsers, setSalesUsers] = useState([])

    const fetchSalesUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/sales/users')
            setSalesUsers(response.data.user)
        } catch (error) {
            console.error('Error fetching sales users', error);
        }
    }

    console.log(salesUsers);

    useEffect(()=>{
        fetchSalesUsers()
    })
    return (
        <div>
            <div className='container-fluid mt-5'>
                <h1 className='text-warning'> <i className='fa-solid fa-user-group '></i> SALES DETAILS</h1>
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
                <h1 className='text-warning mb-5'> SALES (EMPLOYEES)</h1>
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
                            salesUsers?.map((user, index) => (
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

export default Sales