import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Account() {

    const auth = useContext(AuthContext);
    const appUserId = auth.user.userId;
    const [nickname, setNickname] = useState(auth.user.nickname);
    const [errors, setErrors] = useState([]);
    
    const history = useHistory();

    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (window.confirm(`Change nickname to ${nickname}?`)) {
            const body = {appUserId: appUserId, nickname: nickname};
            console.log(body);
            const response = await fetch(`http://localhost:8080/api/travelgenie/user/updateAccount/${appUserId}`, {
     
            method: "PUT",
                headers: {
                      Authorization: `Bearer ${auth.user.token}`,
                     "Content-Type": "application/json",
                },    
                body: JSON.stringify({
                    ...body
                }),
            });
  
            if (response.status === 204) {
                window.alert(`Your nickname has been changed to ${nickname}! Changes will be reflected upon re-login.`);
                setErrors([]);
                history.push("/home")  
            } else if (response.status === 400 || response.status === 409) {
                const err = await response.json();
                setErrors([...err]);
            } else {
                setErrors(["Unknown error."]);
            }
        }
    };

    return (
        <main>
            <h2>Account</h2>
            <h3>{auth.user.nickname}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="nickname" className="form-label">Nickname</label>
                    <input type="text" id="nickname" name="password" className="form-control"
                        value={nickname} onChange={(event) => setNickname(event.target.value)}></input>
                </div>
                {errors.length !== 0 ? (
                    <div className="alert alert-danger">
                        {[...errors]}
                    </div> ) : (<div></div>)}
                <div>
                    <button className="btn btn-primary me-2" type="submit">Register</button>
                    <Link className="btn btn-warning" to="/">Cancel</Link>
                </div>
            </form>
        </main>
    );
}

export default Account;