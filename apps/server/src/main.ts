import { Elysia } from 'elysia';
import cors from '@elysiajs/cors';
import swagger from '@elysiajs/swagger';

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .get('/', () => 'Hello Elysia')
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
