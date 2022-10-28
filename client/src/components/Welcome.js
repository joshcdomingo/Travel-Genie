import { useContext } from "react";
import { Link } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";
import AuthContext from "../contexts/AuthContext";

function Welcome() {

  const auth = useContext(AuthContext);

  return (
    <main>
      {!auth.user ? (
        <div className="welcome_page">
          <LogoAnimation />
            <Link className="btn btn-info" to="/registration">Register</Link>
            <Link className="btn btn-info" to="/login">Login</Link>
            <img id="bags" src="./images/bags.png" alt="cartoon luggage" />
        </div> ) : (<div></div>)}
    </main>    
  );
}

export default Welcome;