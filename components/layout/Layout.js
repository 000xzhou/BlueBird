import NavBar from "./NavBar";
import SideBar from "./SideBar";


function Layout(props) {
    return (
        <div>
            <NavBar />
            <main>{props.children}</main>
            <SideBar />
        </div>
    );
}

export default Layout;
