const express = require('express');

const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})

app.get('/' , function(req , res){ 
    res.send('we are at the root route of our server');
})

app.post('/' , (req , res) =>{ 
    const book = req.body;
    console.log("🚀 ~ app.post ~ book:", book.number1)
    let sum = book.number1 + book.number2
    res.json(sum)

})