import { useState, useEffect, useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function CityDetail() {

    const auth = useContext(AuthContext);
    const location = useLocation();
    const cityName = location.pathname.substring(1);

    const endpoint = "http://localhost:8080/api/travelgenie/entertainment/city";
    const [entertainments, setEntertainments] = useState([]);

    useEffect(() => {
      getEntertainments();
    }, []);

    const getEntertainments = () => {
    
        const init = {
        headers: {
            Authorization: `Bearer ${auth.user.token}`,
        },
        };

        fetch(`${endpoint}/${cityName}`, init)
        .then(response => response.json())
        .then(data => setEntertainments(data))
        .catch(console.error);

    };

    return (
        <main>
        <div className="container">
        <h2>Entertainments in {cityName}</h2>
        <Link className="btn btn-primary" to="/WishList">
          Back to Wish List
        </Link>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Activity Level</th>
              <th>Price Range</th>
              <th>Kid Friendly</th>
            </tr>
          </thead>
          <tbody>
            {entertainments.map((entertainment) => (
              <tr key={entertainment.entertainmentId}>
                <td>{entertainment.entertainmentName}</td>
                <td>{entertainment.activityLevel}</td>
                <td>{entertainment.priceRange}</td>
                <td>{entertainment.kidFriendly ? "Yes" : "No"}</td>
             </tr>
           ))}
          </tbody>
        </table>
        </div>
        </main>
    );
}

export default CityDetail;