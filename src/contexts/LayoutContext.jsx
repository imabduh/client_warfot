import { createContext, useState } from "react";

const LayoutContext = createContext();

function Layout({ children }) {
  const [isProductDetile, setIsProductDetile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        isProductDetile,
        setIsProductDetile,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContext;
export { Layout };
