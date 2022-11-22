import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'


import Home from '../../components/Home.jsx'

// This page should just redirt them to the page/home.js
// but it won't let me because i have the [user.js]...hmmmm

export default function HomePage() {

    // might just delete this and use idex.js as home... if i can't find it online in later time
    return (
        <div>
            <Home />
        </div>
    )
}
