import React from "react";
import {
  Blog,
  Footer,
  Header,
  Landing,
  Services,
  Supporter,
} from "./components";

const page = () => {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <Supporter />
      <Blog />
      <Footer />
    </>
  );
};

export default page;
