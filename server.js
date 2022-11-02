const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

//Get Random Quote
app.get('api/quotes/random', (req, res,) => {

     const randomQuote = getRandomElement(quotes)

     res.send({quote: randomQuote});
    
});

app.get('api/quotes', (req, res) => {
 const filterQuotes = quotes.filter(author => {
     return author.person === req.query.person
 });

 if(req.query.person){
    res.send({quotes: filterQuotes})
 } else{
    res.send({quotes: quotes})
 }
})


//Post for adding new quotes

app.post('api/quote', (req,res) => {
   const newQuote =  req.query.quote;
   const newPerson = req.query.person;

   if(newQuote != '' && newPerson != ''){
    quotes.push({quote: newQuote, person: newPerson});
    res.send({quote:{quote: newQuote, person: newPerson}})
   } else {
    res.status(400).send()
   }
})


app.listen(PORT, () => {
    console.log(`Server active on ${PORT}`)
})