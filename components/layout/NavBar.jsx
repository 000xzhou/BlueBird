
export default function NavBar(props) {
    return (
        <nav>
            <div>
                {/* upper list */}
                <ul>
                    <li>
                        <a href="#"><img className='w-10' src="Twitter-logo.svg" alt="" /></a>
                    </li>
                    <li>
                        <a href="#"><img className='w-10' src="/svg/bxs-home-circle.svg" alt="" />Home</a>
                    </li>
                    <li>
                        <a href="#"><img className='w-10' src="/svg/bx-hash.svg" alt="" />Explore</a>
                    </li>
                    <li>
                        <a href="#"><img className='w-10' src="/svg/bx-bell.svg" alt="" />Notifications</a>
                    </li>
                    <li>
                        <a href="#"><img className='w-10' src="/svg/bxs-user.svg" alt="" />Profile</a>
                    </li>
                </ul>
                <button>Tweet</button>
            </div>
            {/* upper list */}

            {/* lower list */}
            <div>
                <div>Profile Icon</div>
                <div>
                    <div>{ }</div>
                    <div>{ }</div>
                </div>
                <div><a href="#"><img className='w-10' src="/svg/bx-dots-horizontal-rounded.svg" alt="" /></a></div>
                <div>
                    {/* // change this to Link later */}
                    <div><a href="#">Log out</a></div>
                </div>
            </div>
            {/* lower list */}
        </nav>
    )
}