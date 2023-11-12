import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse): VercelResponse {

    return res.json({
        queries: req.query,
        cookies: req.cookies,
        body: req.body,
        test: 'Hello, W0rld!',
        lastRequestTime: new Date()
    })
}