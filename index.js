//backend 시작점
const express = require('express')  //express 모듈 가져옴
const app = express() // 앱 생성
const port = 5000 // 포트

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://parkjh0218:1q2w3e4r@reactcluster.lckkfcs.mongodb.net/?retryWrites=true&w=majority', {})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

//   mongodb+srv://parkjh0218:<password>@reactcluster.lckkfcs.mongodb.net/?retryWrites=true&w=majority

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
