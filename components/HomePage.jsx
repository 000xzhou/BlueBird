import React from 'react'
import Link from 'next/link'

const HomePage = ({ posts }) => {
    const content =
        posts.map(post =>
            <Link href={`${post.user}/status/${post.id}`}>
                <div className='flex border-b-2 p-4'>
                    <img className='w-14 h-14 rounded-full' src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpghttps://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" />
                    <div key={post.id} className="px-4">
                        <div>{post.user}</div>
                        <div>{post.post}</div>
                    </div>
                </div>
            </Link>)
    return content
}

export default HomePage