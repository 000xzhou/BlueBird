import Head from 'next/head'
import { useRouter } from 'next/router'

import NavBar from '../components/NavBar.jsx'
import SideBar from '../components/SideBar.jsx'
import Profile from '../components/Profile.jsx'

//This page should return twitter.com/profileUsername

export default function ProfilePage() {
    const router = useRouter()
    const userId = router.query.userId
    return (
        <div>
            <Head>
                <title>Username | Blue Bird</title>
                <meta name="description" content="Clone of the blue bird I meant twitter" />
                <link rel="icon" href="/Twitter-logo.svg" />
            </Head>
            <header>
                <NavBar />
            </header>
            <main>
                <div>
                    {/* maybe it don't need profile component and just put it here?  */}
                    <Profile />
                    <SideBar />
                </div>
            </main>
        </div>
    )
}
