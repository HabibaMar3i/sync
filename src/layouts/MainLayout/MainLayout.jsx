import { Outlet } from "react-router-dom";
import NavbarComponent from '../../components/Navbar/Navbar'

export default function MainLayout() {
    return (
        <div>
            <NavbarComponent />
            <Outlet/>
        </div>
    )
}
