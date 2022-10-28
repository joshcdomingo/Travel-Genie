import { useEffect, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

const ENTER_DEFAULT = {
  activityLevel: "",
  kidFriendly: "",
  priceRange: ""
};

function EntertainmentForm() {
  const endpoint = "http://localhost:8080/api/travelgenie/entertainment";
  const [entertain, setEntertain] = useState(ENTER_DEFAULT);
  const [editEnterId, setEditEnterId] = useState(0);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const { entertainId } = useParams();

  useEffect(() => {
    if (entertainId) {
        setEditEnterId(entertainId);
      fetch(`${endpoint}/${entertainId}`)
        .then((res) => res.json())
        .then((data) => setEntertain(data));
    }
  }, [entertain]);

  const handleChange = (event) => {
    // make a copy of the object
    const newEntertain = { ...entertain };
    newEntertain[event.target.name] = event.target.value;
    setEntertain(newEntertain);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editEnterId === 0) {
      // ADD an Entertain
      addEntertain();
    } 
  };


  const addEntertain = () => {
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entertain),
    };
    fetch(endpoint, init)
      .then((response) => {
        if (response.status === 201 || response.status === 400) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected status code: ${response.status}`);
        }
      })
      .then((data) => {
        if (data.entertainmentId) {
          // happy path
          resetState();
          // navigate back home "/"
          history.push("/Wish");
        } else {
          setErrors(data);
        }
      })
      .catch((error) => console.log(error));
  };

  const resetState = () => {
    setEntertain(ENTER_DEFAULT);
    setEditEnterId(0);
    setErrors([]);
  };

  return (
    <>
      <h2>{editEnterId > 0 ? "" : "Entertainment Details"}</h2>

      {errors.length > 0 && (
        <div>
          <h3>The following errors occured:</h3>
          <ul>
            {errors.map((error) => {
              return <li>{error}</li>;
            })}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
      <div className="form-group">
                <label htmlFor="activityLevel">Activity Level</label>
                <select id="activityLevel" name="activityLevel"
                    value={entertain.activityLevel} onChange={handleChange}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <div className="form-group">
            <label htmlFor="kidFriendly">Kid Friendly</label>
                <select id="kidFriendly" name="kidFriendly"
                    value={entertain.kidFriendly} onChange={handleChange}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div className="form-group">
            <label htmlFor="priceRange">Price Range:</label>
                <select id="priceRange" name="priceRange"
                    value={entertain.priceRange} onChange={handleChange}>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
                </select>
            </div>
        <div className="mt-4">
          <button className="btn btn-success mr-4" type="submit">
            {editEnterId > 0 ? "" : "Continue"}
          </button>
          <Link className="btn btn-warning" to="/Home">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}

export default EntertainmentForm;