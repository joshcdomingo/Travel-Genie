import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function WishList() {
    const endpoint = "http://localhost:8080/api/wishes";
    const [wishLists, setWishList] = useState([]);

    useEffect(() => {
        getWishList();
      }, []);

      const getWishList = () => {
        fetch(endpoint)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              return Promise.reject(`Unexpected status code: ${res.status}`);
            }
          })
          .then((data) => {
            setWishList(data);
          })
          .catch(console.error);
      };

      const handleDeleteWishList = (wishId) => {
        const wishList = wishLists.find(
          (wishList) => wishList.wishId === wishId
        );
    
        if (
          window.confirm(
            `Delete Wish List ${wishList.wishId} ?`
          )
        ) {
          const init = {
            method: "DELETE",
          };
    
          fetch(`${endpoint}/${wishId}`, init)
            .then((response) => {
              if (response.status === 204) {
                getWishList();
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
      <Link className="btn btn-primary" to="/wishes/add">
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
          {wishLists.map((wishList) => (
            <tr key={wishList.wishId}>
              <td>{wishList.city}</td>
              <td>{wishList.country}</td>
              <td>{wishList.scenery}</td>
              <td>{wishList.entertainment}</td>
              <td className="buttonContainer">
                <Link
                  className="btn btn-primary"
                  to={`/wishes/edit/${wishList.wishId}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteWishList(wishList.wishId)}
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