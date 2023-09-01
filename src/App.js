// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store configuration
import MaterialList from "./components/MaterialList";
import FilterBar from "./components/FilterBar";
import "./style/App.css"; // Import the CSS file

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-heading">Construction Materials</h1>
        <FilterBar />
        <MaterialList />
      </div>
    </Provider>
  );
}

export default App;
