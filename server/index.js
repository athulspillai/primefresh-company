const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/usermodel')

const server = express()
const port = process.env.PORT || 8000;

server.use(cors())
server.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Register', {

})

server.post('/register', async (req, res) => {
    const { username,userid, password, department } = req.body

    if (!username || !password || !userid || !department) {
        return res.status(400).json({ alert: 'Please provide both username and password.' })
    }
    try {
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(409).json({ alert: 'Username already exists.' })
        }

        const user = new User({ username, userid, password, department })
        await user.save()
        res.status(201).json({ alert: 'User registered successfully.' })
    } catch (error) {
        res.status(500).json({ alert: 'Error while registering user.' })
    }
})

server.post('/', async (req, res) => {
    const { userid, password } = req.body

    if (!userid || !password) {
        return res.status(400).json({ alert: 'Please provide both username and password.' })
    }
    try {
        const user = await User.findOne({ userid })
        if (!user) {
            return res.status(404).json({ alert: 'User not found.' })
        }
        if (user.password !== password) {
            return res.status(401).json({ alert: 'Invalid credentials.' })
        }
        const department = user.department

        res.status(200).json({ alert: 'Login successfully.', department })
    } catch (error) {
        res.status(500).json({ alert: 'Error during login.' })
    }
})

server.get('/sales/users', async (req,res) => {
    try {
        const salesUsers = await User.find({ department: 'sales'})
        res.status(200).json({ user: salesUsers})
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sales users'})
    }
})

server.get('/account/users', async (req,res) => {
    try {
        const accountUsers = await User.find({ department: 'account'})
        res.status(200).json({ user: accountUsers})
    } catch (error) {
        res.status(500).json({ message: 'Error fetching account users'})
    }
})

server.get('/hr/users' , async (req,res) => {
    try {
        const hrUsers = await User.find({ department: 'hr'})
        res.status(200).json({user: hrUsers})
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hr users'})
    }
})

server.listen(port, () => {
    console.log('Server is running on 8000');
})