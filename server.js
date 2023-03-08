const express = require('express')

const tiktokvideos =  require('./dbModel')
//const {url,description,channel,song,share,likes,messages} = require('./data')
const Data =require('./data')
const app = express()
app.use(express.json())
app.use((req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next();
});

const port  = process.env.PORT || 9000


require('./connection')

app.get('/', (req, res) => res.status(200).send('hello world how are you'))

app.get('/v1/posts', (req, res) => res.status(200).send(Data))

app.get('/v2/posts', async(res, req) => {
  try {
    const sendVideos = await tiktokvideos.find({});

    console.log(`Videos from Database >>>> ${sendVideos}`)
  } catch (err) {
    console.log(err) 
  }
})



app.post('/v2/posts',  async (req, res) => {
    
   try {
    const {url, channel, song, likes, messages, share, description} = req.body
    console.log(req.body)
    const newVideo = await tiktokvideos.create({url, channel, song, likes, messages, share, description})
    res.status(201).json(newVideo)
   } catch (err) {
    res.status(500)
    res.send(err)
   }
})





app.listen(port, () => console.log(`listening on localhost: ${port}`))
