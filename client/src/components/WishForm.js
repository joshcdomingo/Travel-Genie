import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function WishForm() {

    const auth = useContext(AuthContext);
    const endpoint = `http://localhost:8080/api/travelgenie/wish/match`;
    const [errs, setErrs] = useState([]);
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
    
    
    const getMatches = () => {
        
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.user.token}`
            },
            body: JSON.stringify({
                ...body
            }),
        };

        fetch(endpoint, init)
          .then(res => res.json())
          .then(data => setMatches(data))
          .catch(console.error);
    };

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

        //debugging to see if match fetch is working
        console.log(matches);

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