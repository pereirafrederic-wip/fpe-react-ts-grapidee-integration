import React, { Fragment } from "react";
import { Card, Icon, Divider } from "antd";
import { DomaineEntite } from "../Interfaces";

import Grappe from "../Grappe/Grappe";
import Badge from "../Badge/Badge";

import "antd/dist/antd.css";

export default (domaine: DomaineEntite) => {
  const [saving, save] = React.useState(true);

  const actions: Array<React.ReactNode> = [<Icon type="plus" key="plus" />];

  if (saving) {
    actions.push(<Icon type="save" key="save" onClick={() => save(false)} />);
  } else {
    actions.push(<Icon type="edit" key="edit" onClick={() => save(true)} />);
  }
  actions.push(<Icon type="delete" key="delete" />);

  return (
    <div className="domaine">
      <Card title={domaine.nom} bordered={true} actions={actions}>
        <div className="description">{domaine.description}</div>
        <Divider />
        <div className="rows">
          {domaine.listeGrappe.map(grappe => (
            <div className="row" key={`${domaine.id}-${grappe.id}`}>
              {Grappe(grappe)}
            </div>
          ))}
        </div>
        <Divider />
        <div className="rows">
          {domaine.listeBadge.map(badge => (
            <div className="row" key={`${domaine.id}-${badge.id}`}>
              {Badge(badge)}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
