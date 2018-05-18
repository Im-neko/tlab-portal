import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Top from './page-component/Top';

const App = () => (
  <MuiThemeProvider>
    <Top />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
