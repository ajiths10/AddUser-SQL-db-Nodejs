const User = require('../models/user');
const Moment = require('moment')

exports.postUsers = (req, res, next) => {
    const title = req.body.title;
    const email = req.body.email;
    User.create({
        title:title,
        email:email,
    }).then(result => {
        console.log('User data created');
        res.send('Successfully added')
    }).catch((err)=>console.log(err));
}

exports.getAllUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
        console.log(users)
        res.send(users)
    })
    .catch(err => console.log(err))
}

exports.deleteUser = (req, res, next) => {
    console.log(req.body)
    const userid = req.body.id
    User.findByPk(userid)
    .then(user => {
        return user.destroy();
    })
    .then(result => {
        console.log('Destroyed success');
        res.send('Destroyed success');
    })
    .catch(err => console.log(err));
};

exports.getAllData = ( req, res, next) => {
    User.findAll()
    .then(data => {
        res.send({
            users: data,
            dummyData: {
                auth: true,
                Date: Moment().format('MM/DD/YYYY'),  
            },
        })
    })
    .catch(err=>{console.log(err)});
}