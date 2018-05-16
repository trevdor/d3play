import React, { Component } from "react";
import { ThemeProvider } from "mineral-ui/themes";

// import BrushZoom from "./BrushZoom";
import Scatter from "./Scatter";
import Swimmies from "./Swimmies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          {/* <BrushZoom /> */}
          <Swimmies />
          {/* <Scatter /> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
