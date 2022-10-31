import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const auth = useContext(AuthContext);
    const history = useHistory();

    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8080/authenticate", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
           username,
           password,
          }),
        });
  
        // This code executes if the request is successful
        if (response.status === 200) {
            const { jwt_token } = await response.json();
            auth.login(jwt_token);
            history.push("/home");
        } else if (response.status === 403) {
            const err = await response.json();
            setErrors([...err]);
        } else {
            setErrors(["Unknown error."]);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" name="username" className="form-control"
                    value={username} onChange={(event) => setUsername(event.target.value)}></input>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" className="form-control"
                    value={password} onChange={(event) => setPassword(event.target.value)}></input>
            </div>
            {errors.length !== 0 ? (
                <div className="alert alert-danger">
                    {[...errors]}
                </div> ) : (<div></div>)}
            <div>
                <button className="btn btn-primary me-2" type="submit">Login</button>
                <Link className="btn btn-warning" to="/">Cancel</Link>
            </div>
        </form>
    );
}

export default Login;