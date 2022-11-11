import React from "react";
import { Route } from "react-router-dom";
import HouseDetail from "./components/HouseDetail/HouseDetail.jsx"; 
import Houses from "./components/Houses/Houses.jsx"
import CreateHouse from "./components/CreateHouse/CreateHouse.jsx"
import Nav from "./components/Nav/Nav.jsx"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Houses}/>
      <Route exact path="/houses/:houseId" component={HouseDetail} />
      <Route exact path= "/house/create" component={CreateHouse} />
      <Route path= "/" component={Nav}/>
    </div>
  );
}

export default App;