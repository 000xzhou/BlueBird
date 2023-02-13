import NavBar from "./Navbar";
import SideBar from "./SideBar";


function Layout(props) {
    return (
        <div>
            <NavBar />
            <main className='border-r-2 border-l-2 col-span-2 lg:col-span-1'>{props.children}</main>
            <SideBar />
        </div>
    );
}

export default Layout;
