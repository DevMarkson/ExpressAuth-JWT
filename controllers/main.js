// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const dotenv = require('dotenv');
// Load config
dotenv.config({ path: './config/config.env' });

const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
    const { username, password } = req.body
    // mongo
    // Joi

    if (!username || !password){
        throw new BadRequestError('Please provide email and password')
    }
    const id = new Date().getDate()

    // try to keep the payload small, better experience for user
    const token = jwt.sign({ id, username }, JWT_SECRET, { expiresIn: '30d' });
    res.status(200).json({ msg: 'user created', token });
}



const dashboard = async (req, res) => {
    // console.log(req.headers);
    // console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100)


    res.status(200).json({ 
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`});    } 



module.exports = {
    login, dashboard,
}
