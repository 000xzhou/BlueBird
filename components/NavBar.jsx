import styles from './css/NavBar.module.css'

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
                    <div>{props.user.name}</div>
                    <div>{props.user.username}</div>
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