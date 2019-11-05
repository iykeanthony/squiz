const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.send(`
        <h1>Let's Test if You're a True Nigerian</h1>
        <form method='POST' action='/answer'>
            <label>
                What is the capital of Nigeria?
                <input type="text" name="capital" />
            </label>
            <br>
            <hr>
            <label>
                How many major languages do we have in the country?
                <input type="text" placeholder="Enter a Number" name="languages" />
            </label>
            <br>
            <hr>
            <input type="submit" value="submit" />
        </form>    
    `)
})

app.post('/answer', (req, res)=>{
    if(req.body.capital.toUpperCase() == "ABUJA" && req.body.languages == "3"){
        res.send(`
            <h1 style="color: green">Correct!!</h1>   
            <a href="/">Back to Quiz</a>     
        `)
    }else{
        res.send(`
            <h1 style="color: red">Wrong Answer</h1>   
            <a href="/">Back to Quiz</a>     
        `)
        console.log(req.body.capital.toUpperCase(), req.body.languages)
    }
})

app.listen(4000, ()=>console.log('Server is Live'));