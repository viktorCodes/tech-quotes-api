const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

//Get Random Quote
app.get('api/quotes/random', (req, res,) => {

     const randomQuote = getRandomElement(quotes)

     res.send({quote: randomQuote})
    
});

app.get('api/quotes', (req, res, next) => {

})



app.listen(PORT, () => {
    console.log(`Server active on ${PORT}`)
})