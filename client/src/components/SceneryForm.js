import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function SceneryForm() {

    const [city, setCity] = useState({
        id: 0,
        scenery: "SNOW",
    });
    const [errs, setErrs] = useState([]);

    const { cityId } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (cityId) {
            fetch(`http://localhost:8080/api/travelgenie/city`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject();
                    }
                })
                .then(setCity)
                .catch(() => history.push("/"));
        }
    }, [cityId, history])

    function handleChange(evt) {
        const nextCity = { ...city };
       
            nextCity[evt.target.name] = evt.target.value;
        setCity(nextCity);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

       if(city.scenery === "METROPOLITAN"){
        history.push("/EntertainmentForm");
       }
       if(city.scenery === "BEACH"){
        history.push("/EntertainmentForm");
       }
       if(city.scenery === "MOUNTAIN"){
        history.push("/EntertainmentForm");
       }
       if(city.scenery === "DESSERT"){
        history.push("/EntertainmentForm");
       }
       if(city.scenery === "SNOW"){
        history.push("/EntertainmentForm");
       }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>What is your ideal Scenery?</h2>
            {errs.length > 0 && <div>
                <ul>
                    {errs.map(e => <li key={e}>{e}</li>)}
                </ul>
            </div>}
            <div>
                <label htmlFor="scenery"></label>
                <select id="scenery" name="scenery"
                    value={city.scenery} onChange={handleChange}>
                    <option>METROPOLITAN</option>
                    <option>BEACH</option>
                    <option>MOUNTAIN</option>
                    <option>DESSERT</option>
                    <option>SNOW</option>
                </select>
            </div>
            <div>
                <button type="submit" className="button">Continue</button>
                <Link to="/Home" className="button button-outline">Cancel</Link>
            </div>
        </form>
    );
}

export default SceneryForm;