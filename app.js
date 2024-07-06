const express = require('express')
const PORT = 3000;
const app = express()
const path = require('path')
// app.use(express.static(path.json(__dirname, 'public')))
app.use((req,res,next) => {
    const userAgent = req.get('user-agent')
    const Fingerprint2 = require('fingerprintjs2')
    Fingerprint2.getPromise().then(components => {
        const fingerprint = Fingerprint2.x64hash128(components.map(pair => pair.value).join(''), 31)
        req.deviceId = fingerprint;
        next();
    })
})
app.get('/', (req,res)=>{
    res.send('DeviceId:' + req.deviceId)
})
app.listen(PORT, (req,res)=>{
    console.log(`Server works on PORT: ${PORT}`)
})