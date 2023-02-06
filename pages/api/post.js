// req: An instance of http.IncomingMessage, plus some pre-built middlewares
// res: An instance of http.ServerResponse, plus some helper functions

export default function handler(req, res) {
    const { statusId } = req.query
    res.end(`Post: ${statusId}`)

    if (req.method === 'POST') {

    } else if (req.method === "PUT") {

    } else if (req.method === "DELETE") {

    }
}

// https://nextjs.org/docs/api-routes/dynamic-api-routes
// GET api/posts - gets a list of posts, probably paginated
// GET api/posts/12345 - gets post id 12345
// { } // GET `/api/post` (empty object)
// { "slug": ["a"] } // `GET /api/post/a` (single-element array)
// { "slug": ["a", "b"] } // `GET /api/post/a/b` (multi-element array)