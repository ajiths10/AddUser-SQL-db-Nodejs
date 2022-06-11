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