
import ProfilePage from '../../components/ProfilePage.jsx'
import ProfilePosts from '../../components/ProfilePosts.jsx'

//This page return twitter.com/profileUsername

const Profile = ({ posts, usersProfile }) => {

    return (
        <>
            <ProfilePage usersProfile={usersProfile} />
            <ProfilePosts posts={posts} />
        </>
    )
}

export default Profile

// checks for new data
export async function getServerSideProps(context) {
    // for authentication or check session cookie
    const req = context.req
    const res = context.res
    // fetch data from API

    const { posts, usersProfile } = await import('../../data/data.json')
    return {
        props: {
            posts: posts,
            usersProfile: usersProfile
        }
    }
}