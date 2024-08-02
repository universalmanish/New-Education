import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { db } from '@/db/db';
import { subject } from '@/db/schema';

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/1',  async (c) => {
  const data = await db.select().from(subject)
  return c.json(data)
})

export const GET = handle(app)
export const POST = handle(app)