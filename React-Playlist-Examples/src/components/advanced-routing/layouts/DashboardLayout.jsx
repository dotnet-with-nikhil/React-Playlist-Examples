import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {

    return (

        <>

            <h1>Dashboard</h1>

            <nav>

                <Link to="profile">Profile</Link>

                {" | "}

                <Link to="settings">Settings</Link>

            </nav>

            <hr />

            <Outlet />

        </>

    );

}

export default DashboardLayout;