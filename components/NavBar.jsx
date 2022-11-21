import styles from './css/NavBar.module.css'

export default function NavBar() {
    return (
        <nav>
            <div>
                {/* upper list */}
                <ul>
                    <li>
                        <a href="#"><img src="Twitter-logo.svg" alt="" height="20" /></a>
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
                <button className={styles.test}>Tweet</button>
            </div>
            {/* upper list */}

            {/* lower list */}
            <div>
                <div>Profile Icon</div>
                <div>
                    <div>Profile name</div>
                    <div>username</div>
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