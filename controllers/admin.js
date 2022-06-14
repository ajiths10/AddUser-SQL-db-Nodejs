const User = require('../models/user');

exports.postUsers = (req, res, next) => {
    console.log('===>', req.body)
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

exports.getAllUsers =(req, res, next) => {
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
            dummy: [1,2,3,4,5,6,7,8,9,0],
        })
    })
    .catch(err=>{console.log(err)});
}