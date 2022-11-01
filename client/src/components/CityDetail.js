import { useState, useEffect, useContext } from "react";
import { Link, useLocation} from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import NotFound from "./NotFound";

function CityDetail() {

    const auth = useContext(AuthContext);
    const location = useLocation();
    const cityName = location.pathname.substring(1);

    const endpoint = "http://localhost:8080/api/travelgenie/entertainment/city";
    const endpoint2 = "http://localhost:8080/api/travelgenie/city";
    
    const [entertainments, setEntertainments] = useState([]);
    const [city, setCity] = useState(null);

    useEffect(() => {
      getEntertainments();
      getCity();
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
    
    const getCity = () => {
    
        const init = {
        headers: {
            Authorization: `Bearer ${auth.user.token}`,
        },
        };

        fetch(`${endpoint2}/${cityName}`, init)
        .then((response) => {
            if (response.status === 200) {              
              return response.json();
            } else {
              return Promise.reject(`Unexpected status code: ${response.status}`);
            }
        })
        .then((data) => {
            if (data.cityId) {
                setCity(data);
            }
        })
        .catch(console.error);
    };

    return (
        <main>
            {city == null ? <NotFound /> : 
                <div className="container">
                    <h2>{city.cityName}, {city.countryName}</h2>
                    <h5>{city.scenery}</h5>
                    <Link className="btn btn-primary" to="/WishList">
                        Back to Wish List
                    </Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Entertainment Name</th>
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
            }
        </main>
    );
}

export default CityDetail;