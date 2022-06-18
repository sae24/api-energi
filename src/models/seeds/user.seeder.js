const db = require('../index')

const User = db.user

exports.userSeed = () => {
    User.create({
        name: 'Saepuloh',
        email: 'akh.saepuloh@gmail.com',
        phone: '0877',
        password: 'sae12345'
    })
}

