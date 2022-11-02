import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
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
                        {/* <Link to="/Home" className="home">Home</Link> */}
                        <NavLink to='/Home' activeClassName="active" activeStyle={{color: "#ecce32"}} style={{textDecoration: "none", padding: "10px", color: "#fff"}}>Home</NavLink>
                        <NavLink to='/Account' activeClassName="active" activeStyle={{color: "#ecce32"}} style={{textDecoration: "none", padding: "10px", color: "#fff"}}>Account</NavLink>
                        <NavLink to='/WishList' activeClassName="active" activeStyle={{color: "#ecce32"}} style={{textDecoration: "none", padding: "10px", color: "#fff"}}>Wish List</NavLink>
                        {/* <Link to="/Account" className="account">Account</Link>
                        <Link to="/WishList" className="wishList">Wish List</Link> */}
                        <button className="btn btn-light logout" onClick={() =>auth.logout()}>Log Out</button>
                    </div>
            </div>
        </nav>) : (<div></div>)}
        </main>
    );
}

export default Navigation;
