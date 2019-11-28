import * as React from "react";
import { Card, Icon, Divider } from "antd";
import { GrappeEntite } from "../Interfaces";
import Badge from "../Badge/Badge";
import "antd/dist/antd.css";

export default (grappe: GrappeEntite) => {
  const [saving, save] = React.useState(true);

  let actions: Array<React.ReactNode> = [<Icon type="plus" key="plus" />];

  if (saving) {
    actions.push(<Icon type="save" key="save" onClick={() => save(false)} />);
  } else {
    actions.push(<Icon type="edit" key="edit" onClick={() => save(true)} />);
  }
  actions.push(<Icon type="delete" key="delete" />);
  return (
    <Card title={grappe.nom} bordered={true} actions={actions}>
      {grappe.description}
      <Divider />
      <div className="rows">
        {grappe.listeBadge.map(badge => (
          <div className="row" key={`${grappe.id}-${badge.id}`}>
            {Badge(badge)}
          </div>
        ))}
      </div>
    </Card>
  );
};
