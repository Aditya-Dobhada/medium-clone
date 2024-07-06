import { Env, Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from 'bcrypt-ts'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>().basePath('/api/v1')

app.post('/signup', async (c) => {

  const prisma = new PrismaClient({
  datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const salt = bcrypt.genSaltSync(10)

  const body = await c.req.json();

  await prisma.user.create({
    data: {
      email: body.email,
      password: bcrypt.hashSync(body.password, salt),
    }
  })

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
