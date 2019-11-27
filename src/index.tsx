import * as React from "react";
import { render } from "react-dom";
import Badge from "./badge/Badge";
import Domaine from "./Domaine/Domaine";
import Tag from "./Tag/Tag";

import "./styles.scss";
import "antd/dist/antd.css";
import {
  badgeEntite,
  DomaineEntite,
  tagEntite,
  GrappeEntite
} from "./Interfaces";

const badgeExemple: badgeEntite = {
  nombre: 10,
  nom: "badge 1",
  id: 1,
  idDomaine: 12345,
  description: ""
};
const grappe1Exemple: GrappeEntite = {
  id: 1,
  nom: "grappe 12",
  description: "grappe 12 ",
  listeBadge: [],
  listeIdee: []
};
const grappe2Exemple: GrappeEntite = {
  id: 2,
  nom: "grappe 22",
  description: "grappe 22 ",
  listeBadge: [],
  listeIdee: []
};
const domaineExemple: DomaineEntite = {
  id: 2,
  nom: "Domaine 1234",
  description: "domaine domaine",
  listeBadge: [],
  listeGrappe: [grappe1Exemple, grappe2Exemple]
};

const tagExemple: tagEntite = {
  nom: "tagA",
  id: 1,
  description: "",
  listeIdee: [],
  listeBadge: []
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {Badge(badgeExemple)}
      <div className="rows">{Domaine(domaineExemple)}</div>

      {Tag(tagExemple)}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
