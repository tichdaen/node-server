import { VercelRequest, VercelResponse } from "@vercel/node";
import { DateTime } from "luxon";

DateTime.now().setZone("Asia/Seoul")
export default function handler(req: VercelRequest, res: VercelResponse): VercelResponse {

    const now = DateTime.now().toFormat("yyyy-LL-dd HH:mm:ss")

    return res.json({
        queries: req.query,
        cookies: req.cookies,
        body: req.body,
        test: 'Hello, W0rld!',
        lastRequestTime: new Date()
    })
}