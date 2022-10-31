import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";


function WishList() {
 
  const auth = useContext(AuthContext);
  const endpoint = "http://localhost:8080/api/travelgenie/wish";
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
      getwish();
  }, []);

  const getwish = () => {
    
    const init = {
      headers: {
        Authorization: `Bearer ${auth.user.token}`,
      },
    };

    fetch(`${endpoint}/user/${auth.user.userId}`, init)
      .then(response => response.json())
      .then(data => setWishes(data))
      .catch(console.error);

  };

  const handleDeleteWish = (wish_id) => {
    const wish = wishes.find(
      (wish) => wish.wishId === wish_id
    );

    if (window.confirm(`Delete wish ${wish.cityName} ${wish.countryName}?`)) {
      const init = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.user.token}`,
        }  
      };

      fetch(`${endpoint}/${wish_id}`, init)
        .then((response) => {
          if (response.status === 204) {
            getwish();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .catch(console.log);
    }
  };

  return (
    <main>
      <div className="container">
      <h2>Wish List</h2>
        <Link className="btn btn-primary" to="/WishForm">
          Add Wish
        </Link>
        <table>
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
            {wishes.map((wish) => (
              <tr key={wish.wishId}>
                <td>{wish.cityName}</td>
                <td>{wish.countryName}</td>
                <td>{wish.scenery}</td>
                <td>{wish.entertainmentName}</td>
                <td className="buttonContainer">
                  <button className="btn btn-danger" onClick={() => handleDeleteWish(wish.wishId)}>
                    Delete
                  </button>
                </td>
              </tr>
           ))}
          </tbody>
       </table>
    </div>
  </main>
  );
}

export default WishList;