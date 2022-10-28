import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Navigation() {

    const auth = useContext(AuthContext);

    return (
        <main>
        {auth.user ? (
            <nav className="navbar navbar-dark bg-dark mb-2">
                <div className="container">
                    <Link to="/Home" className="navbar-brand"><img id="logo" src="./images/TravelGenieLogo.png" alt="Travel Genie logo" /></Link>
                    <div className="col d-flex justify-content-end">
                        <Link to="/Account" className="btn btn-primary">Account</Link>
                        <Link to="/WishList" className="btn btn-warning">Wish List</Link>
                        <button className="btn btn-danger" onClick={() =>auth.logout()}>Logout</button>
                    </div>
            </div>
        </nav>) : (<div></div>)}
        </main>
    );
}

export default Navigation;