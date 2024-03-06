/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Angga Sulistiangga",
  title: "Software Development & Cloud Computing",
  email: "Anggasulistiangga@gmail.com",
  gitHub: "https://github.com/Sulistiangga56/",
  instagram: "https://www.instagram.com/panggilgaaaja/",
  linkedIn: "https://www.linkedin.com/in/sulistiangga/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#01796f";
const secondaryColor = "#d2f1ed";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Education />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
