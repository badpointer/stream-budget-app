import React from "react";
import SvgIcon from "material-ui/SvgIcon";
import svgIcons from "./svgIcons";

const ERROR = {
  d:
    "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
};

const SVGIcon = props => {
  const icon = svgIcons[props.icon] || ERROR;
  console.log(icon);
  return (
    <SvgIcon>
      <path fill="#000000" d={icon.d} />
    </SvgIcon>
  );
};

export default SVGIcon;
