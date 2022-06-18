const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()

let whitelist = ['http://localhost:5000']
let corsOptions = {
    origin: function (origin, callback) {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not Allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


const db = require('./src/models')
const seed = require('./src/models/seeds')
db.sequelize.sync().then(() => {
    // seed.userSeed()
    console.log('database connected')
}).catch((err) => {
    console.error('database connection failed : ', err.message)
})

app.get('/', (req, res) => {
    res.json({
        message: 'server jalan...'
    })
})

const PORT = process.env.APP_PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
