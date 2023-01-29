import Image from "next/image"
import NavbarItem from "./NavbarItem"
import TweetMediumButton from "./TweetMediumButton"
import Link from 'next/link'

export default function Navbar(props) {
    // TODO: use this color for svg #D6D9DB
    return (
        <section className="h-screen pt-2 ">
            <div className="pl-4">
                <Image src="/assets/twitter-logo.svg" width={30.12} height={18} alt="twitter logo" />
            </div>

            <nav className="pt-4">
                <Link href="/home">
                    <NavbarItem src={"/assets/home.svg"} text={"Home"} />
                </Link>
                <Link href="/explore">
                    <NavbarItem src={"/assets/hash.svg"} text={"Explore"} />
                </Link>
                <Link href="/notifications">
                    <NavbarItem src={"/assets/bell.svg"} text={"Notifications"} />
                </Link>
                <Link href="/messages">
                    <NavbarItem src={"/assets/messages.svg"} text={"Messages"} />
                </Link>
                <Link href="/bookmarks">
                    <NavbarItem src={"/assets/bookmark.svg"} text={"Bookmarks"} />
                </Link>
                <Link href="/lists">
                    <NavbarItem src={"/assets/lists.svg"} text={"Lists"} />
                </Link>
                <Link href="/userId">
                    <NavbarItem src={"/assets/profile.svg"} text={"Profile"} />
                </Link>
                <NavbarItem src={"/assets/three-dots.svg"} text={"More"} />
            </nav>
            <div className="mt-2">
                <TweetMediumButton />
            </div>
        </section>
    )
}