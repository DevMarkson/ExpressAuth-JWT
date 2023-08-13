// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const dotenv = require('dotenv');
// Load config
dotenv.config({ path: './config/config.env' });

const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
    const { username, password } = req.body
    // mongo
    // Joi

    if (!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
    }
    const id = new Date().getDate()

    // try to keep the payload small, better experience for user
    const token = jwt.sign({ id, username }, JWT_SECRET, { expiresIn: '30d' });
    res.status(200).json({ msg: 'user created', token });
}



const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })
}

module.exports = {
    login, dashboard,
}
