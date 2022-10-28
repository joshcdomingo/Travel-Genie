import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function WishList() {
  const endpoint = "http://localhost:8080/api/travelgenie/wish";
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    getWishes();
  }, []);

  const getWishes = () => {
    fetch(endpoint)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(`Unexpected status code: ${res.status}`);
        }
      })
      .then((data) => {
        setWishes(data);
      })
      .catch(console.error);
  };

  const handleDeleteWish = (wish_id) => {
    const wish = wishes.find(
      (wish) => wish.wishId === wish_id
    );

    if (
      window.confirm(
        `Delete wish ${wish.city} ${wish.country}?`
      )
    ) {
      const init = {
        method: "DELETE",
      };

      fetch(`${endpoint}/${wish_id}`, init)
        .then((response) => {
          if (response.status === 204) {
            getWishes();
          } else {
            return Promise.reject(`Unexpected status code: ${response.status}`);
          }
        })
        .catch(console.log);
    }
  };

  return (
    <>
<div className="container">
  <h2>Wish List</h2>
  <Link className="btn btn-primary" to="/scenery">
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
          <td>{wish.city}</td>
          <td>{wish.country}</td>
          <td>{wish.scenery}</td>
          <td>{wish.entertainment}</td>
          <td className="buttonContainer">
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteWish(wish.wishId)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
</>
);
}

export default WishList;