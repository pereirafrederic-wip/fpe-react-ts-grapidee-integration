import * as React from "react";
import { render } from "react-dom";
import Domaine from "./Domaine/Domaine";
import Idee from "./Idee/Idee";

import "./styles.scss";
import "antd/dist/antd.css";
import ideeEntite, {
  badgeEntite,
  DomaineEntite,
  tagEntite,
  GrappeEntite
} from "./Interfaces";

const badge1Exemple: badgeEntite = {
  nombre: 10,
  nom: "badge 1",
  id: 1,
  idDomaine: 12345,
  description: ""
};

const badge2Exemple: badgeEntite = {
  nombre: 10,
  nom: "badge 1",
  id: 1,
  idDomaine: 12345,
  description: ""
};

const tagExemple: tagEntite = {
  nom: "tagA",
  id: 1,
  description: "",
  listeIdee: [],
  listeBadge: [badge1Exemple, badge2Exemple]
};

const grappe1Exemple: GrappeEntite = {
  id: 1,
  nom: "grappe 12",
  description: "grappe 12 ",
  listeBadge: [badge2Exemple],
  listeIdee: []
};

const idee3Exemple: ideeEntite = {
  id: 13,
  projet: true,
  contenu: "idee exemple 3",
  description: `ioioioio  l flflflf k `,
  listeDomaine: [],
  listeGrappe: [],
  listeEsclave: [],
  listeBadge: []
};

const grappe2Exemple: GrappeEntite = {
  id: 2,
  nom: "grappe 22",
  description: "grappe 22 ",
  listeBadge: [badge1Exemple],
  listeIdee: [idee3Exemple]
};
const domaineExemple: DomaineEntite = {
  id: 2,
  nom: "Domaine 1234",
  description: "domaine domaine",

  listeBadge: [badge2Exemple],
  listeGrappe: [grappe1Exemple, grappe2Exemple]
};

const idee1Exemple: ideeEntite = {
  id: 1,
  projet: true,
  contenu: "adadad dad ad ada dad ad d",
  description: `mflflflf l flflflf k `,
  tag: tagExemple,
  listeDomaine: [domaineExemple],
  listeGrappe: [grappe1Exemple, grappe2Exemple],
  listeEsclave: [],
  listeBadge: [badge1Exemple]
};

const idee2Exemple: ideeEntite = {
  id: 12,
  projet: true,
  contenu: "io dad oioioioad ada dad ad d",
  description: `ioioioio  l flflflf k `,
  tag: [],
  listeDomaine: [domaineExemple],
  listeGrappe: [grappe2Exemple],
  listeEsclave: [idee1Exemple],
  listeBadge: [badge1Exemple]
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="rows">{Domaine(domaineExemple)}</div>
      <div className="rows">
        {Idee(idee1Exemple)}
        {Idee(idee2Exemple)}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
