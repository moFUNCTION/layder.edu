import React from "react";
import { Image } from "@chakra-ui/react";
import LogoImage from "../../../Assets/Logo/LAYDER-removebg-preview (2).png";
import { Link } from "react-router-dom";
export const Logo = ({ ...rest }) => {
  return (
    <Link to="/">
      <Image src={LogoImage} loading="lazy" decoding="async" {...rest} />
    </Link>
  );
};
