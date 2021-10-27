import { Link } from 'react-router-dom';

const Default = () => {
    return (
        <div className="default">
            Please <Link to="/login">log in</Link> or <Link to="/registration">create new user</Link> to see the app.
        </div>
    );
}

export default Default;