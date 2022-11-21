import Head from 'next/head'

import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/SideBar.jsx'
import Profile from '../../components/Profile.jsx'

//This page should return twitter.com/profileUsername
// need to change this to  [profile].js
export default function ProfilePage() {

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
                    <Profile />
                    <SideBar />
                </div>
            </main>
        </div>
    )
}
