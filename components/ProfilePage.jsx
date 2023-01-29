
const ProfilePage = ({ usersProfile }) => {

    const filterUser = usersProfile.filter(user => user.user === "Blue Bird")
    const content = filterUser.map(user =>
        < div key={user.id} >
            <img className="bg-cover" src={user.img.map(cover => cover.coverImg)} alt="" />
            <img width={100} src={user.img.map(photo => photo.profileImg)} alt="" />
            <div>{user.user}</div>
            <div>Joined: {user.dateJoin}</div>
        </div >
    )
    return (
        <>
            {content}
        </>
    )
}

export default ProfilePage
