const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "1234",
    database:"test"
})

app.get("/books", (req, res) =>{
    db.query("SELECT * FROM books", (err, data) =>{
        if(err) return res.json({message: 'FETCH ERROR'})
        return res.json(data)
    })
})

app.post("/books", (req, res) =>{
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price

    db.query("INSERT INTO books(`title`, `description`, `price`) VALUES (?, ?, ?)",
    [title, description, price],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/books/:id", (req, res) =>{
    const bookId = req.params.id

    const title = req.body.title
    const description = req.body.description
    const price = req.body.price

    db.query("UPDATE books SET `title`= ?, `description` = ?, `price` = ? WHERE id = ?",
    [title, description, price, bookId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id", (req, res) =>{
    const bookId = req.params.id

    db.query("DELETE FROM books WHERE id = ?",
    [bookId],
    (err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.listen(5000, () =>{
    console.log('CONNECTED TO BACKEND ON PORT 5000')
})