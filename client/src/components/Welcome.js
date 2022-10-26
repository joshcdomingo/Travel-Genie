import { Link } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";

function Welcome() {
  return (
    <div>
      <LogoAnimation />
    <p className="Introduction"> Get Started<Link className="btn btn-info" to="/createAccount">Register</Link>
      </p>
      <div>
      <p className="Introduction-login"><Link className="btn btn-info" to="/login">Login</Link>
      </p>
      </div>
    </div>
  );
}

export default Welcome;