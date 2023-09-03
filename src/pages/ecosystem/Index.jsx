import React, { useEffect } from "react";
import Header from "./Header";
import Info from "./Info";
import Note from "./Note";

const Ecosystem = () => {

  useEffect(() => {
    document.body.classList.add('smooth');
  })

  return (
    <>
      <Header />
      <Note />
      <Info />
    </>
  );
};

export default Ecosystem;
