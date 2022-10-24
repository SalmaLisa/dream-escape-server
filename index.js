const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000; 
const app = express()
const tours = require('./data/cities.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/city_tours', (req, res)=> {
  res.send(tours)
})
app.get('/city_tours/:id', (req, res) => {
  const id = req.params.id;
  const selected_tour =tours.find(t=>t.tour_id === id)
  res.send(selected_tour)
})

app.listen(port,()=> {
  console.log('CORS-enabled web server listening on port' , port)
})