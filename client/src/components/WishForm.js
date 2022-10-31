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
    
            getMatches();
     

    }

    const handleAddWish = async () => {
        const newWish = {
            appUserId: auth.user.userId,
            cityName: String(matches.map(m => m.cityName)),
            countryName: String(matches.map(m => m.countryName)),
            scenery: String(matches.map(m => m.scenery)),
            entertainmentName: String(matches.map(m => m.entertainmentName)),
            activityLevel: String(matches.map(m => m.activityLevel)),
            priceRange: String(matches.map(m => m.priceRange)),
            kidFriendly: Boolean(matches.map(m => m.kidFriendly))
        };
        
        if (window.confirm("Add this wish to your checklist?")) {
        const init = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.user.token}`
          },
          body: JSON.stringify(newWish),
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
              // happy path
              resetState();
              // navigate back home "/"
            } else {
              setErrs(data);
            }
          })
          .catch((error) => console.log(error));

          history.push("/WishList");
        }
        else{
            history.push("/Home");
        }


      };

      const resetState = () => {
        setWish(WISH_DEFAULT);
        setErrs([]);
      };
      


    return (
        <form onSubmit={handleSubmit}>
            <h2>Wish Form</h2>
            {errs.length > 0 && <div>
                <ul>
                    {errs.map(e => <li key={e}>{e}</li>)}
                </ul>
            </div>}
            <div>
                <label htmlFor="scenery">Scenery: </label>
                <select id="scenery" name="scenery"
                    value={wish.scenery} onChange={handleChange}>
                    <option>METROPOLITAN</option>
                    <option>BEACH</option>
                    <option>MOUNTAIN</option>
                    <option>DESSERT</option>
                    <option>SNOW</option>

                </select>
                <div className="form-group">
                <label htmlFor="activityLevel">Activity Level: </label>
                <select id="activityLevel" name="activityLevel"
                    value={wish.activityLevel} onChange={handleChange}>
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                </select>
            </div>
            <div>
                <label htmlFor="kidFriendly">KidFriendly?</label>
                <input type="checkbox" id="kidFriendly" name="kidFriendly"
                    checked={wish.kidFriendly} onChange={handleChange}></input>
            </div>
            <div className="form-group">
            <label htmlFor="priceRange">Price Range: </label>
                <select id="priceRange" name="priceRange"
                    value={wish.priceRange} onChange={handleChange}>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                </select>
            </div>
            </div>
            <div>
                <button type="submit" className="button" onClick={() => getMatches()}>Find Destination</button>
                <Link to="/Home" className="btn btn-danger">Cancel</Link>
                <div>
                    <h1> {matches.map(m => m.countryName)}</h1>
                    <h1> {matches.map(m => m.cityName)}</h1>
                    <h1> {matches.map(m => m.entertainmentName)}</h1> 
                </div>
                <button
              className="btn btn-success"
              onClick={() => handleAddWish(wish.wishId)}
            >
              Add
            </button>
            </div>
        </form>
    );
}

export default WishForm;