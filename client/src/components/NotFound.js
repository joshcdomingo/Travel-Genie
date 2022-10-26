import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Click <Link to="/">here</Link> to go back home.
      </p>
    </div>
  );
}

export default NotFound;