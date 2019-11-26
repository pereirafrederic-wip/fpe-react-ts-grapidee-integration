import * as React from "react";
import { render } from "react-dom";
import Badge from "./badge/Badge";

import "./styles.scss";
import { badgeEntite } from "./Interfaces";

const badgeExemple: badgeEntite = {
  nombre: 10,
  nom: "badge",
  id: 1,
  idDomaine: 12345
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {Badge(badgeExemple)}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
