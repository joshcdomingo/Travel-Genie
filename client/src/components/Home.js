import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Home() {

    const auth = useContext(AuthContext);

    return (
        <main>
            <h1>Your wish is my command Master {auth.user.nickname}!</h1>
            <Link to="/Scenery" className="btn btn-dark">Make a Wish</Link>
        </main>
    );
}

export default Home;