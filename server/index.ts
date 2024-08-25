import express from 'express'
import path from 'path'
import http from 'http'
const cors = require('cors')
const app = express()
// Basic usage (allows all origins)
app.use(cors());

// Example with more specific settings
app.use(cors({
  origin: 'http://localhost:5173', // Restrict to specific origin
  methods: '*', // Allow only certain methods
  allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
}));
app.use(express.static(path.join(__dirname,'..', 'client')))

const httpServer = http.createServer(app)

app.get('/send', (req, res, next) => {
  res.json({
    "message": "success"
  })
})

httpServer.listen('8080', () => {
  console.log("server up and running")
})

