import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WishForm() {

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

    const endpoint = "http://localhost:8080/api/travelgenie/wish/match";
    const [destination, setDestination] = useState([]);
  
    useEffect(() => {
      getMatch();
    }, []);
  
    const init = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        }
    };
        

    const getMatch = () => {
      fetch(endpoint, init)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            return Promise.reject(`Unexpected status code: ${res.status}`);
          }
        })
        .then((data) => {
          setDestination(data);
          console.log(data);
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

        const list = [choice];
        console.log(list)
        


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
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
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