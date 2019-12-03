import React, { Fragment } from "react";
import { Card, Icon, Divider } from "antd";
import ideeEntite from "../Interfaces";
import Domaine from "../Domaine/Domaine";
import Grappe from "../Grappe/Grappe";
import Badge from "../Badge/Badge";
import Idee from "./Idee";

import "antd/dist/antd.css";

export default (idee: ideeEntite) => {
  const [saving, save] = React.useState(true);

  let actions: Array<React.ReactNode> = [<Icon type="plus" key="plus" />];

  if (saving) {
    actions.push(<Icon type="save" key="save" onClick={() => save(false)} />);
  } else {
    actions.push(<Icon type="edit" key="edit" onClick={() => save(true)} />);
  }
  actions.push(<Icon type="delete" key="delete" />);
  return (
    <div className="idee">
      <Card title={idee.nom} bordered={true} actions={actions}>
        <div className="description">{idee.description}</div>
        <Divider />
        <div className="contenu">{idee.contenu}</div>
        <Divider />
        <div className="rows">
          {idee.listeDomaine.map(domaine => (
            <div className="row" key={`${idee.id}-${domaine.id}`}>
              {Domaine(domaine)}
            </div>
          ))}
        </div>
        <Divider />
        <div className="rows">
          {idee.listeGrappe.map(grappe => (
            <div className="row" key={`${idee.id}-${grappe.id}`}>
              {Grappe(grappe)}
            </div>
          ))}
        </div>
        <Divider />
        <div className="rows">
          {idee.listeEsclave.map(ideeEsclave => (
            <div className="row" key={`${idee.id}-${ideeEsclave.id}`}>
              {Idee(ideeEsclave)}
            </div>
          ))}
        </div>
        <Divider />
        <div className="rows">
          {idee.listeBadge.map(badge => (
            <div className="row" key={`${idee.id}-${badge.id}`}>
              {Badge(badge)}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
