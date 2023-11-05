import './App.css';
import {NavLink} from 'react-router-dom'


const Nav = () => {
    return (
        <div className='main-menu'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Message'>Message</NavLink>
            <NavLink to='/Intresting'>Intresting</NavLink>
            <NavLink to='/Notifications'>Notifications</NavLink>
            <NavLink to='/Profile'>Profile</NavLink>
            <NavLink to='/Addpost'>Addpost</NavLink>
        </div>
    );
};
export default Nav;
