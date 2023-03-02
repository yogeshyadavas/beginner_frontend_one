import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Card() {
  // Use useState hook for state variables
  const [users, setUsers] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);

  // Use useEffect hook for componentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          setUsers(json);
          setDataisLoaded(true);
        });
    }, 3000);
  }, []); // Pass an empty array as dependency to run only once

  // Return the JSX element
  return (
    <>
      {DataisLoaded ? (
        users.map((user) => (
          <div key={user.id} className="card-align shadow-card">
            <div className="row">
              <div className="col-auto">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                  alt="Avatar"
                  width={200}
                  height={200}
                />
              </div>
              <div className="col">
                <h2 className="mb-[15px] text-[2rem] font-medium leading-[1.2]">
                  {user.name}
                </h2>
                <p className="mb-[5px]">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="mb-[5px]">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="mb-[5px]">
                  <strong>Company:</strong> {user.company.name}
                </p>
                <p className="mb-[5px]">
                  <strong>Website:</strong> {user.website}
                </p>
                <p className="mb-[5px]">
                  <strong>Address:</strong> {user.address.street},{" "}
                  {user.address.suite}, {user.address.city},{" "}
                  {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Card;