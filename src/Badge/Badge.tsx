import * as React from "react";
import { Badge } from "antd";
import { badgeEntite } from "../Interfaces";
import "antd/dist/antd.css";
export default (badge: badgeEntite) => {
  const hrefDomaine: string = "/domaine/" + badge.idDomaine;
  return (
    <a href={hrefDomaine} className="badge head-example">
      <Badge count={`${badge.nombre} x ${badge.nom}`} />{" "}
    </a>
  );
};
