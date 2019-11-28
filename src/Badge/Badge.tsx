import * as React from "react";
import { Badge } from "antd";
import { badgeEntite } from "../Interfaces";
import "antd/dist/antd.css";
export default (badge: badgeEntite) => {
  const hrefDomaine: string = "/domaine/" + badge.idDomaine;
  return (
    <Badge count={`${badge.nombre} x ${badge.nom}`}>
      <a href={hrefDomaine} className="head-example">
        lien
      </a>
    </Badge>
  );
};
