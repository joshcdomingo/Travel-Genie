import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
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