import * as React from "react";
import { Card, Icon, Divider } from "antd";
import { DomaineEntite } from "../Interfaces";

import Grappe from "../Grappe/Grappe";

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
    <Card title={domaine.nom} bordered={true} actions={actions}>
      {domaine.description}
      <Divider />
      <div className="rows">
        {domaine.listeGrappe.map(grappe => (
          <div className="row" key={`${domaine.id}-${grappe.id}`}>
            {Grappe(grappe)}
          </div>
        ))}
      </div>
    </Card>
  );
};
