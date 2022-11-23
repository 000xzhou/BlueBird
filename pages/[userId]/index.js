
import { useRouter } from 'next/router'
import Profile from '../../components/Profile.jsx'
import ProfileMessage from '../../components/ProfileMessage.jsx'


//This page should return twitter.com/profileUsername

// Temp info for outputting data from db
// 
const tempInfo =
{
    // id is userid for all of them
    id: 1,
    username: "cool bird",
    message: [
        {
            Z: 1,
            mess: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
        },
        {
            messageid: 2,
            mess: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
        },

    ]
}

const userInfo = {
    id: 1,
    username: "A cool bird",
    name: "cool bird",
    description: "A very cool bird that looks like a cat fluffy kitten",
}
const tempInfoLikes = {
    id: 1,
    likes: [
        // displays message it likes
        {
            messageid: 1,
            mess: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
        },
        {
            messageid: 2,
            mess: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum"
        },

    ]
}



export default function ProfilePage(props) {

    return (
        <div>
            <div>
                <Profile userInfo={props.userInfo} />
            </div>
            <div>
                <ProfileMessage messageData={props.messageData} />
            </div>
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
            messageData: tempInfo,
            likeData: tempInfoLikes,
            userInfo: userInfo,
        }
    }
}