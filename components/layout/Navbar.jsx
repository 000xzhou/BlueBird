import Image from "next/image"
import NavbarItem from "./NavbarItem"
import TweetMediumButton from "./TweetMediumButton"

export default function Navbar(props) {
    // TODO: use this color for svg #D6D9DB
    return (
        <section className="h-screen pt-2 ">
            <div className="pl-4">
                <Image src="/assets/twitter-logo.svg" width={30.12} height={18} alt="twitter logo"  />
            </div>

            <nav className="pt-4">
                <NavbarItem src={"/assets/home.svg"} text={"Home"} />
                <NavbarItem src={"/assets/hash.svg"} text={"Explore"} />
                <NavbarItem src={"/assets/bell.svg"} text={"Notifications"} />
                <NavbarItem src={"/assets/messages.svg"} text={"Messages"} />
                <NavbarItem src={"/assets/bookmark.svg"} text={"Bookmarks"} />
                <NavbarItem src={"/assets/lists.svg"} text={"Lists"} />
                <NavbarItem src={"/assets/profile.svg"} text={"Profile"} />
                <NavbarItem src={"/assets/three-dots.svg"} text={"More"} />
            </nav>
            <div className="mt-2">
                <TweetMediumButton />
            </div>
        </section>
    )
}