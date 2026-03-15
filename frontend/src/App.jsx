import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "./features/sampleSlice";

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.sample.message);

  useEffect(() => {
    dispatch(fetchMessage());
    console.log("Dispatched fetchMessage action", message);
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", backgroundColor: "black", color: "white", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1>MERN Stack on Kubernetes</h1>
      <p>Backend says: {message || "Loading..."}</p>
    </div>
  );
}

export default App;
