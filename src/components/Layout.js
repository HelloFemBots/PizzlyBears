import React from "react";
import Section from "../section/Section";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}
