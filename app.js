const http = require('http');

const express = require('express')
const sequelize = require('./util/database');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/admin',adminRoutes);

sequelize
.sync()
.then(result => {
    console.log('running in'+ 4000 + 'port');
    app.listen(4000);
}
)
.catch(err => {
    console.log(err)
})