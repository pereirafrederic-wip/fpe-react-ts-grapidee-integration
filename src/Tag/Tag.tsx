import * as React from "react";
import { Tag } from "antd";
import { tagEntite } from "../Interfaces";
import "antd/dist/antd.css";
export default (tag: tagEntite) => {
  return <Tag color="geekblue">{tag.nom}</Tag>;
};
