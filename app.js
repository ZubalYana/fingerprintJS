const express = require('express')
const PORT = 3000;
const app = express()
const path = require('path')
// app.use(express.static(path.json(__dirname, 'public')))
app.get('/', (req,res)=>{
    res.sendFile(__dirname, 'public', 'index.html')
})
app.listen(PORT, (req,res)=>{
    console.log(`Server works on PORT: ${PORT}`)
})