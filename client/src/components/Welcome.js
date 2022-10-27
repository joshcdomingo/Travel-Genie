import { useContext } from "react";
import { Link } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";
import AuthContext from "../contexts/AuthContext";
import Home from "./Home";

function Welcome() {

  const auth = useContext(AuthContext);

  return (
    <main>
      {!auth.user ? (
        <div className="welcome_page">
          <LogoAnimation />
            <p className="Introduction"> Travel Genie </p>
            <Link className="btn btn-info" to="/createAccount">Register</Link>
            <Link className="btn btn-info" to="/login">Login</Link>
        </div> ) : (<div></div>)}
    </main>    
  );
}

export default Welcome;