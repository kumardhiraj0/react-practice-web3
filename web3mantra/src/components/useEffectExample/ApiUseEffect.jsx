import React, { useEffect, useState } from "react";
import "../useEffectExample/style.css";
const ApiUseEffect = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    async function getData() {
      const data1 = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=101`
      );
      const res = await data1.json();
      setData(res);
      console.log(res);
    }
    getData();
    document.title = `${count} online employee`;
  }, [count]);
  return (
    <div className="api-fetch">

      <div className="App">
        <table>
          <thead>
            <tr>
              <th>First-Name</th>
              <th>Last-Name</th>
              <th>Contact</th>
            </tr>
          </thead>

          <tbody>
            {
            data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.contactNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h2>Api fetch using useEffect Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me to increase no of data
      </button>
    </div>
  );
};

export default ApiUseEffect;
