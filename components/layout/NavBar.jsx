
import Image from 'next/image'
export default function NavBar(props) {
    return (
        <nav>
            <div>
                {/* upper list */}
                <ul>
                    <li>
                        <Image className="testFi" src="/svg/Twitter-logo.svg" alt="Vercel Logo" width={40} height={40} />
                    </li>
                    <li>
                        <a href="#"><Image className="testFi" src="/svg/bxs-home-circle.svg" alt="Vercel Logo" width={40} height={40} />Home</a>
                    </li>
                    <li>
                        <a href="#"><Image className="testFi" src="/svg/bx-hash.svg" alt="Vercel Logo" width={40} height={40} />Explore</a>
                    </li>
                    <li>
                        <a href="#"><Image className="testFi" src="/svg/bx-bell.svg" alt="Vercel Logo" width={40} height={40} />Notifications</a>
                    </li>
                    <li>
                        <a href="#"><Image className="testFi" src="/svg/bxs-user.svg" alt="Vercel Logo" width={40} height={40} />Profile</a>
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
                <div>
                    <a href="#"><Image className="testFi" src="/svg//bx-dots-horizontal-rounded.svg" alt="Vercel Logo" width={40} height={40} />Profile</a>

                </div>
                <div>
                    {/* // change this to Link later */}
                    <div><a href="#">Log out</a></div>
                </div>
            </div>
            {/* lower list */}
        </nav>
    )
}