import express from 'express'
import path from 'path'
import http from 'http'
import cors from 'cors'
const app = express()
// Basic usage (allows all origins)
app.use(cors());

// Example with more specific settings
app.use(cors({
  origin: 'https://example.com', // Restrict to specific origin
  methods: 'GET,POST', // Allow only certain methods
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

