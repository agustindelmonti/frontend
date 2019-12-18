import React, { useEffect, useState } from "react";

import InterestCard from "../components/interestcard.jsx";

const API_URL = "http://localhost:8080";

const Trip = ({ match }) => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/trips/${match.params.id}`, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        setTrip(data);
        setLoading(false);
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      {!loading && (
        <div>
          <h1>{trip.title}</h1>
          <p>{trip.description}</p>
        </div>
      )}
    </div>
  );
};
export default Trip;
