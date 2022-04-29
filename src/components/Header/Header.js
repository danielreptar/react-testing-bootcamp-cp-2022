import React from "react";
import {
  HeaderStyled,
  TitleStyled,
} from "../../assets/styles/components/header";
import Logo2 from "../../assets/images/rocket-2.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <img src={Logo2} alt="logo" />
      <TitleStyled>NASA PHOTOS</TitleStyled>
    </HeaderStyled>
  );
};
