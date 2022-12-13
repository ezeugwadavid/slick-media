import React from "react";
import Category from "../../components/category/category.component";
import Header from "../../components/header/header.component";
import Hero from "../../components/hero/hero.component";
import { LandingContainer } from "./landing.styles";

const Landing = () => {
  return (
    <LandingContainer>
      <Header />
      <Hero />
      <Category />
    </LandingContainer>
  );
};

export default Landing;
