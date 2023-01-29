import React from 'react'
import Link from 'next/link'

const HomePage = ({ posts }) => {
    const content =
        posts.map(post =>
            <Link href={`${post.user}/status/${post.id}`}>
                <div key={post.id} className="py-4">
                    <div>{post.user}</div>
                    <div>{post.post}</div>
                </div>
            </Link>)
    return content
}

export default HomePage