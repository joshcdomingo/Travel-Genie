import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import HomeAnimation from "./HomeAnimation";

function Home() {

    const auth = useContext(AuthContext);

    return (
        <main>
            <h2 id="homeH2">Your wish is my command, Master {auth.user.nickname}!</h2>
            <Link to="/WishForm" className="btn btn-dark">Make a Wish</Link>
            <HomeAnimation />
        </main>
    );
}

export default Home;