import { useState, useEffect } from "react";


function SceneryForm() {
  const endpoint = "http://localhost:8080/api/travelgenie/city/scenery";
  const [scenery, setScenery] = useState([]);

  useEffect(() => {
    getSceneries();
  }, []);

  const getSceneries = () => {
    fetch(endpoint)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(`Unexpected status code: ${res.status}`);
        }
      })
      .then((data) => {
        setScenery(data);
      })
      .catch(console.error);
  };

  return (
    <>
      <h2>Scenery</h2>
      <table>
        <thead>
          <tr>
            <th>Scenery</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {scenery.map((a)  =>  (
            <tr key={a.agentId}>
              <td>{a.firstName}</td>
                    <td>{(a.middleName === null || a.middleName === "") ? 
                    "N/A" : (a.middleName.charAt(0).toUpperCase() + ".")} 
                    </td>
                    <td>{a.lastName}</td>
                    <td>{(a.dob === null) ? "N/A" : a.dob}</td>
                    <td>{a.heightInInches}"</td>
              <td className="buttonContainer">
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SceneryForm;