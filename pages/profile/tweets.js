import Head from 'next/head'

import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/SideBar.jsx'
import Tweet from '../../components/Tweet.jsx'

// It redir to that person's profile/status
// in this case profile/tweets
export default function TweetPage() {

    return (
        <div>
            <Head>
                <title>Tweets | Blue Bird</title>
                <meta name="description" content="Clone of the blue bird I meant twitter" />
                <link rel="icon" href="/Twitter-logo.svg" />
            </Head>
            <header>
                <NavBar />
            </header>
            <main>
                <div>
                    <Tweet />
                    <SideBar />
                </div>
            </main>
        </div>
    )
}
