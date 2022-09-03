import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/users', (req, res) => {
    res.send(['user1', 'user2', 'user3'])
})

app.post('/users',(req, res) => {
    res.send("User added")
})


app.delete("/users/:id", (req, res) => {
    res.send(`User with id ${req.params.id} id was deleted`)

})


app.patch("/users/:id", (req, res) => {
    res.send(`User with id ${req.params.id} was changed`)
})


app.get('/admin', (req, res) => {
    res.send("You don't have access rights")
})


app.listen(port)