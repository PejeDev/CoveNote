import { trpc } from '@elysiajs/trpc'
import { initTRPC } from '@trpc/server'
import { Elysia } from 'elysia'
import z from 'zod'
import { auth } from './lib/auth'

const app = new Elysia()

const t = initTRPC.create()
const p = t.procedure

const router = t.router({
  greet: p.input(z.string()).query(({ input }) => input),
})

app.use(trpc(router))

app.mount(auth.handler)

app.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

export type Router = typeof router
