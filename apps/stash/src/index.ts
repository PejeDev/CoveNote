import { trpc } from '@elysiajs/trpc'
import { initTRPC } from '@trpc/server'
import { Elysia } from 'elysia'
import z from 'zod'

const t = initTRPC.create()
const p = t.procedure

const router = t.router({
  greet: p.input(z.string()).query(({ input }) => input),
})

export type Router = typeof router
const app = new Elysia().use(trpc(router)).listen(3001)

console.log(`🦊 Elysia is running on ${app.server?.url}`)
