import { Outlet } from "react-router-dom";
import NavbarComponent from '../../components/Navbar/Navbar'

export default function AuthLayout() {
    return (
        <div>
            <NavbarComponent />
            <Outlet/>
        </div>
    )
}
