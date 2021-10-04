import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/userReducer';

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    return (  
        <nav className="navbar">
            <h1>Diary</h1>
            {isAuth &&
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/create">New Record</Link>
                </div>
            }
            {!isAuth &&
            <div className="links-aside">
                <Link to="/login">Log in</Link>
                <Link to="/registration">Sign in</Link>
            </div>
            }
            {isAuth && 
                <div className="links-aside">
                    <span className="logout" onClick={() => dispatch(logout()) }>Log out</span>
                </div>
            }
        </nav>
    );
}
 
export default Navbar;