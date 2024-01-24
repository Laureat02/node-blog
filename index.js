const express = require('express')
const path = require('path')

const app = express()
const ejs = require('ejs')
app.set('view engine','ejs')


app.use(express.static('public'))

app.listen(3000,()=>{
  console.log("App listening on port 3000")
})

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/about',(req,res)=>{
  res.render('about')
})

app.get('/contact',(req,res)=>{
  res.render('contact')
})

app.get('/post',(req,res)=>{
  res.render('post')
})