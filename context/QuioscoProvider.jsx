import { createContext, useEffect, useState } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuiscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  return (
    <QuioscoContext.Provider 
      value={{
        categorias
      }}
    >{children}</QuioscoContext.Provider>
  );
};

export { QuiscoProvider };

export default QuioscoContext;
