import React from 'react'

const HomePage = ({ posts }) => {
    const content =
        posts.map(post =>
            <div key={post.id} className="py-4">
                <div>{post.user}</div>
                <div>{post.post}</div>
            </div>)
    return content
}

export default HomePage