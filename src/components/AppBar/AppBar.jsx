import { NavLink } from 'react-router-dom';

export const AppBar = () => {

    return (
        <> 
            <ul>
                <li key="1">
                    <NavLink to={'/'}><p>Home</p></NavLink>
                </li>
                <li key="2">
                    <NavLink to={'admin'}><p>Admin</p></NavLink>
                </li>
                <li key="3">
                    <NavLink to={'customer'}><p>Customer</p></NavLink>
                </li>
                <li key="4">
                    <NavLink to={'driver'}><p>Driver</p></NavLink>
                </li>
                <li key="5">
                    <NavLink to={'dispatcher'}><p>Dispatcher</p></NavLink>
                </li>
            </ul>
        </>
    )
};