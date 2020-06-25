const express = require('express');
const app = express();

const exphbs = require('express-handlebars');

//const path = require('path');

const bodyParser = require('body-parser');

const { call_api } = require('./stock/stock');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', (req, resp) => {
    call_api('fb')
    .then((response)=>{
        //console.log('La DATA', response.data);
        resp.render('home',{
            stock:response.data
        })
    })
    .catch((error)=>{
        console.log('show error' + error);
    })
});


app.post('/', (req, resp) => {
    call_api(req.body.stock_ticker)
    .then((response)=>{
        //console.log('La DATA', response.data);
        resp.render('home',{
            stock:response.data
        })
    })
    .catch((error)=>{
        console.log('show error' + error);
    })
});

app.get('/about.html', function (req, res) {
    res.render('about');
});











app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`);
})