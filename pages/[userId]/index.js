import Head from 'next/head'
import { useRouter } from 'next/router'

import Profile from '../../components/Profile.jsx'

//This page should return twitter.com/profileUsername

export default function ProfilePage() {

    return (
        <div>
            <Profile />
        </div>
    )
}
