
const ProfilePosts = ({ posts }) => {
    // filter out all the post made by blue bird / including replys


    const filterbyID = posts.filter(post => post.user === "Blue Bird")

    const content = filterbyID.map(post =>
        <div key={post.id} className="py-4">
            <div>{post.user}</div>
            <div>{post.post}</div>
        </div>)
    // post that match user id (when db is set up change this)
    return (
        <>
            <h2 className="text-lg">Tweets</h2>
            {content}
        </>
    )
}

export default ProfilePosts