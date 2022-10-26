import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Navigation() {

    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-dark bg-dark mb-2">
            <div className="container">
                <Link to="/" className="navbar-brand">Travel Genie</Link>
                <div className="col d-flex justify-content-end">
                    {user && <Link to="/add" className="btn btn-primary me-2">Add a Hero</Link>}
                    {user ? <button className="btn btn-danger" onClick={logout}>Logout</button>
                        : <Link to="/login" className="btn btn-success">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navigation;