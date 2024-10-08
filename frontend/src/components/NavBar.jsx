import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='title'>Financial tracker</div>
            <Link to="/">Home</Link>
            <Link to="/month/01/2024">January</Link>
            <Link to="/month/07/2024">July</Link>
        </div>
    );
}

export default NavBar;