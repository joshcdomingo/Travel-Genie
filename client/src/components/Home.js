import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { gsap } from "gsap";

function Home() {

    const auth = useContext(AuthContext);

    const animateGenie = () => {
        gsap.timeline()
            .from("#genieHome", { duration: 1.5, x: -600 })
      };

    return (
        <main>
            <h2 id="homeH2">Your wish is my command, Master {auth.user.nickname}!</h2>
            <Link to="/WishForm" className="btn btn-dark">Make a Wish</Link>
        <div className="logo">
            <img id="genieHome" src="./images/genie.png" alt="genie" onLoad={animateGenie} />
        </div>
        </main>
    );
}

export default Home;