export default function Profile(props) {

    // console.log(props.userInfo.username)
    return (
        <section>
            {/* img bg need ot be in cover*/}
            <img className="bg-cover" src="https://media.istockphoto.com/id/1340642632/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=yVQkU_vonXZk0M0oLKRA1kKeEW3UCWceBdSDYv_sSmY=" alt="user choice of img" />

            <img width={100} src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="profile img" />
            <div>
                <div>
                    {props.userInfo.name}
                </div>
                <div>
                    {props.userInfo.username}
                </div>
                <div>{props.userInfo.description}</div>
                <div>following and follwers... eh..</div>
            </div>
        </section>
    )
}