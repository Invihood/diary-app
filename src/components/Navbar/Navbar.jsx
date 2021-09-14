import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Diary</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Record</Link>
            </div>
            <div className="links-aside">
                <Link to="/login">Log in</Link>
                <Link to="/registration">Sign in</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;