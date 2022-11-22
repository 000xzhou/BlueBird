import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'


import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar.jsx'
import SideBar from '../components/SideBar.jsx'
import Home from '../components/Home.jsx'

// This page should just redirt them to the page/home.js
// but it won't let me because i have the [user.js]...hmmmm

export default function HomePage2() {

    // might just delete this and use idex.js as home... if i can't find it online in later time
    return (
        <div className={styles.container}>
            <Head>
                <title>Blue Bird</title>
                <meta name="description" content="Clone of the blue bird I meant twitter" />
                <link rel="icon" href="/Twitter-logo.svg" />
            </Head>
            <header>
                <NavBar />
            </header>
            <main>
                <div>
                    <Home />
                    <SideBar />
                </div>
            </main>
        </div>
    )
}
