import express from 'express'

const app = express()

const response = { ok: true }

app.all('*', (req, res) => {
  res.json({ ...response })
})

export default app
