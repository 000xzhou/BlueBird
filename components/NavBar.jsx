
export default function NavBar() {
    return (
        <nav>
            <div>
                {/* upper list */}
                <ul>
                    <li>
                        <a href="#"><img className='w-10' src="Twitter-logo.svg" alt="" /></a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Notifications</a>
                    </li>
                    <li>
                        <a href="#">Profile</a>
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
                <div>...</div>
                <div>
                    <div>Log out</div>
                </div>
            </div>
            {/* lower list */}
        </nav>
    )
}