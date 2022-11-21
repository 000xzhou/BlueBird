import Head from 'next/head'
//This page should return twitter.com/profileUsername/status/message id
import NavBar from '../../components/NavBar.jsx'
import SideBar from '../../components/SideBar.jsx'
import Tweet from '../../components/Tweet.jsx'

//This page should return twitter.com/profileUsername/status/message id
// soo... might have to change stuff
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
