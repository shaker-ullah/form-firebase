import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center my-8 font-bold space-x-10">
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    );
};

export default Header;