import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function WishForm() {

    const auth = useContext(AuthContext);
    const endpoint = `http://localhost:8080/api/travelgenie/wish/match`;
    const [matches, setMatches] = useState([]);
    const appUserId = auth.user.userId;

    const [choice, setChoice] = useState({
        wishId: 0,
        appUserId: 0,
        cityName: "",
        countryName: "",
        scenery: "BEACH",
        entertainmentName: "",
        activityLevel: "MEDIUM",
        priceRange: "$",
        kidFriendly: true
    });

    // test variable
    const body = ({
        wishId: 0,
        appUserId: 0,
        cityName: "",
        countryName: "",
        scenery: "BEACH",
        entertainmentName: "",
        activityLevel: "MEDIUM",
        priceRange: "$",
        kidFriendly: true
    });

    useEffect(() => {
        getMatches();
      }, []);
    
      const init = {
          method: "GET",
          headers: {
              Authorization: `Bearer ${auth.user.token}`
          },
          body: JSON.stringify({
            ...body
        }),
      };
    
      const getMatches = () => {
        fetch(endpoint, init)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              return Promise.reject(`Unexpected status code: ${res.status}`);
            }
          })
          .then((data) => {
            setMatches(data);
          })
          .catch(console.error);
      };

    const [errs, setErrs] = useState([]);

    function handleChange(evt) {
        const nextChoice = { ...choice };
        if (evt.target.name === "kidFriendly") {
            nextChoice.kidFriendly = evt.target.checked;
        }
        else {
            nextChoice[evt.target.name] = evt.target.value;
        }
        setChoice(nextChoice);
    }

    function handleSubmit(evt) {
        evt.preventDefault();


        //testing some things
        if(choice.activityLevel === body.activityLevel){
            console.log("similar");
            console.log(choice);
            console.log(body);
            
        }
        else {
            console.log("false");
            console.log(choice);
            console.log(body);
        }
    }

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
                    value={choice.scenery} onChange={handleChange}>
                    <option>METROPOLITAN</option>
                    <option>BEACH</option>
                    <option>MOUNTAIN</option>
                    <option>DESSERT</option>
                    <option>SNOW</option>
                </select>
                <div className="form-group">
                <label htmlFor="activityLevel">Activity Level: </label>
                <select id="activityLevel" name="activityLevel"
                    value={choice.activityLevel} onChange={handleChange}>
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                </select>
            </div>
            <div>
                <label htmlFor="kidFriendly">KidFriendly?</label>
                <input type="checkbox" id="kidFriendly" name="kidFriendly"
                    checked={choice.kidFriendly} onChange={handleChange}></input>
            </div>
            <div className="form-group">
            <label htmlFor="priceRange">Price Range: </label>
                <select id="priceRange" name="priceRange"
                    value={choice.priceRange} onChange={handleChange}>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                </select>
            </div>
            </div>
            <div>
                <button type="submit" className="button">Continue</button>
                <Link to="/Home" className="button button-outline">Cancel</Link>
            </div>
        </form>
    );
}

export default WishForm;