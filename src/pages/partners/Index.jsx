import { useEffect } from "react";
import Box from "./Box";
import Header from "./Header";
import Note from "./Note";

const Partners = () => {
  
  useEffect(() => {
    document.body.classList.add('smooth');
  })

  return (
    <>
      <Header />
      <Note />
      <Box />
    </>
  );
};

export default Partners;
