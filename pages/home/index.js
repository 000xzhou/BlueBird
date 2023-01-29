
import HomePage from '../../components/HomePage.jsx'
import FormSubmit from '../../components/FormSubmit.jsx'

const index = ({ posts }) => {
    return (
        <>
            <FormSubmit />
            <HomePage posts={posts} />
        </>
    )
}

export default index

// checks for new data
export async function getServerSideProps(context) {
    // for authentication or check session cookie
    const req = context.req
    const res = context.res
    // fetch data from API

    const { posts } = await import('../../data/data.json')
    // console.log(posts)

    return {
        props: {
            posts: posts
        }
    }
}