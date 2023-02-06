export default function handler(req, res) {
    const { userId } = req.query
    res.end(`Post: ${userId}`)

    if (req.method === 'POST') {

    } else if (req.method === "PUT") {

    } else if (req.method === "DELETE") {

    }
}