import { Hono } from 'hono'

const app = new Hono().basePath('/api/v1')


app.post('/signup', (c) => {
  return c.text("signup route")
})

app.post('/signin', (c) => {
  return c.text("signin route")
})

app.get('/blog/:id', (c) => {
  return c.text("get blog route")
})

app.post('/blog', (c) => {
  return c.text("create blog route")
})

app.put('/blog', (c) => {
  return c.text("update blog route")
} )

export default app
