
import Home from '../../components/Home.jsx'
import FormSubmit from '../../components/FormSubmit.jsx'

// Temp info for outputting data from db
const tempInfo = [
    // id
    // username
    // user name
    // newest user post/messages
    // message likes
    {
        id: 1,
        username: "A cool bird",
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
    },
    {
        id: 2,
        username: "Another cool bird",
        message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
    }
]

export default function HomePage(props) {

    function AddInputSubmit(inputData) {
        console.log(inputData)
    }


    return (
        <div>
            <FormSubmit onClick={AddInputSubmit} />
            <Home tempInfo={props.messageData} />
        </div>
    )
}

// checks for new data
export async function getServerSideProps(context) {
    // for authentication or check session cookie
    const req = context.req
    const res = context.res
    // fetch data from API
    return {
        props: {
            messageData: tempInfo
        }
    }
}