import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function WishForm() {

    const WISH_DEFAULT = {
        scenery: "BEACH",
        activityLevel: "MEDIUM",
        priceRange: "$",
        kidFriendly: true
    };

    const auth = useContext(AuthContext);
    const endpoint = `http://localhost:8080/api/travelgenie/wish/match`;
    const [errs, setErrs] = useState({});
    const [matches, setMatches] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [wish, setWish] = useState(WISH_DEFAULT);
    const history = useHistory();
        
    const getMatches = () => {
        
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.user.token}`
            },
            body: JSON.stringify(wish),
        };

        fetch(endpoint, init)
          .then(res => res.json())
          .then(data => setMatches(data))
          .catch((error) => console.log(error));
    };

    function handleChange(evt) {
        const nextChoice = { ...wish };
        if (evt.target.name === "kidFriendly") {
            nextChoice.kidFriendly = evt.target.checked;
        }
        else {
            nextChoice[evt.target.name] = evt.target.value;
        }
        setWish(nextChoice);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
    
        setSubmitted(true);
            
        getMatches();
    }

    const handleAddWish = async (wish) => {

        wish.appUserId = auth.user.userId;
        
        if (window.confirm("Add this wish to your wish list?")) {
            const init = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.user.token}`
                },
                body: JSON.stringify(wish),
            };
        
            fetch("http://localhost:8080/api/travelgenie/wish", init)
            .then((response) => {
                if (response.status === 201 || response.status === 400) {
                    return response.json();
                } else {
                return Promise.reject(`Unexpected status code: ${response.status}`);
                }
            })
            .then((data) => {
                if (data.wishId) {
                    history.push("/WishList");
                } else {
                    setErrs(data);
                }
            })
            .catch((error) => console.log(error));
        }
        else{
            history.push("/Home");
        }
    };

    const resetState = () => {
        setWish(WISH_DEFAULT);
        setErrs([]);
        setSubmitted(false);
    };
      
    return (
        <main>
        {!submitted ?
            <form onSubmit={handleSubmit}>
                <h2>Wish Form</h2>
                <div className="form-group">
                    <label htmlFor="scenery">Scenery: </label>
                    <select id="scenery" name="scenery" value={wish.scenery} onChange={handleChange}>
                        <option>METROPOLITAN</option>
                        <option>BEACH</option>
                        <option>MOUNTAIN</option>
                        <option>DESSERT</option>
                        <option>SNOW</option>
                    </select>
                    <label htmlFor="activityLevel">Activity Level: </label>
                    <select id="activityLevel" name="activityLevel" value={wish.activityLevel} onChange={handleChange}>
                        <option>LOW</option>
                        <option>MEDIUM</option>
                        <option>HIGH</option>
                    </select>
                    <label htmlFor="kidFriendly">KidFriendly?</label>
                    <input type="checkbox" id="kidFriendly" name="kidFriendly" checked={wish.kidFriendly} onChange={handleChange}></input>
                    <label htmlFor="priceRange">Price Range: </label>
                        <select id="priceRange" name="priceRange" value={wish.priceRange} onChange={handleChange}>
                        <option>$</option>
                        <option>$$</option>
                        <option>$$$</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Find Destination</button>
                    <Link to="/Home" className="btn btn-danger">Cancel</Link>
                </div>
            </form> 
            
            : 

            <div className="search-result">  
                {matches.length == 0 ? (<div className="no-result">
                                       <h2>Sorry, Master {auth.user.nickname}!</h2>
                                       <h2> I have failed to find a suitable desitination.</h2>
                                       <h2> Please try again!</h2>
                                       <button onClick={resetState} className="btn btn-dark">Make a Wish</button></div>) 
                    :
                    (<table>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Country</th>
                            <th>Scenery</th>
                            <th>Entertainment</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((wish) => (
                            <tr key={matches.indexOf(wish)}>
                                <td>{wish.cityName}</td>
                                <td>{wish.countryName}</td>
                                <td>{wish.scenery}</td>
                                <td>{wish.entertainmentName}</td>
                                <td className="buttonContainer">
                                    <button className="btn btn-warning" onClick={() => handleAddWish(wish)}>
                                        Add
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>)
                }
            </div>}
        </main> 
    );
}

export default WishForm;