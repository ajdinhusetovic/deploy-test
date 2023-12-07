const express = require('express')

const app = express()
app.use(express.json())

app.use('/api', (req, res) => {
    res.send('Hello')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})