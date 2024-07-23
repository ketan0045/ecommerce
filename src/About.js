// import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";
// import { AppContext } from "./context/productcontext";

const About = () => {
  const { myname} = useProductContext()

  const data = {
    name: "Ecommerce site",
  };

  return <>
    {myname}
    <HeroSection myData={data} />
  </>;
};

export default About;
