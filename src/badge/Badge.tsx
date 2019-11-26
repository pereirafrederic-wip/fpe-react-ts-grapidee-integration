import * as React from "react";
import { Badge } from "antd";
import { badgeEntite } from "../Interfaces";
import { Fragment } from "react";

export default (badge: badgeEntite) => {
  const hrefDomaine: string = "/domaine/" + badge.idDomaine;
  return (
    <Fragment>
      {hrefDomaine}
      {badge.nombre}
      {"hello"}
      <Badge count={badge.nombre}>
        <a href={hrefDomaine} className="head-example" />
      </Badge>
    </Fragment>
  );
};
