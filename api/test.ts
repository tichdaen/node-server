import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse): VercelResponse {

    const date = new Date()
    const now = `${date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`


    return res.json({
        queries: req.query,
        cookies: req.cookies,
        body: req.body,
        test: 'Hello, W0rld!',
        lastRequestTime: now
    })
}