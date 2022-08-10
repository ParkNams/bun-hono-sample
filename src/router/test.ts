import { Context, Hono } from "hono";

const testRouter = new Hono();

testRouter.get("/a1", (c: Context) => {
    return c.json({ message: "hi" });
})

export default testRouter