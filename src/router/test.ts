import { Context, Hono, Next } from "hono";

const testRouter = new Hono();

testRouter.get("/a1", async (c: Context, next: Next) => {
    console.log("test middleware");
    await next();
},(c: Context) => {
    return c.json({ message: "hi" });
})

export default testRouter;