import { createContext, useEffect, useState } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuiscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState([]);
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((c) => c.id === id);
    setCategoriaActual(categoria[0]);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleSetProducto,
        modal,
        handleChangeModal,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuiscoProvider };

export default QuioscoContext;
