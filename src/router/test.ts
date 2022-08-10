import { Context, Hono } from "hono";

const testRoute = new Hono();

testRoute.get("/a1", (c: Context) => {
    return c.json({ message: "hi" });
})

export default testRoute 