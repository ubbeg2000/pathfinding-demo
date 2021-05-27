import React from "react";
import Map from "./components/Map";
import { GlobalContext } from "./store/context";

const App = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <GlobalContext>
        <Map />
      </GlobalContext>
    </div>
  );
};

export default App;
