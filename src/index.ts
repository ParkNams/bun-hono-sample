import { Context, Hono, Next } from "hono";
import { cors } from 'hono/cors';
import testRouter from "./router/test" 
const app = new Hono();

const port = parseInt(process.env.PORT) || 80;

app.use(cors());

app.use(async (c: Context, next: Next) => {
  console.log('custom middleware')
  await next();
})

app.get("/", (c: Context) => {
  return c.json({ message: "Hello World!" });
});

app.route('/test', testRouter);

app.onError((err: Error, c: Context) => {
  console.log(err)
  return c.json({ action: 'error', message: err.toString() });
})

app.notFound((c: Context) => {
  return c.text(`${c.req.url} not exist`)
})

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
