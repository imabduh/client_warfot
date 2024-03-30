import { useContext } from "react";
import ProductItem from "./ProductItem";
import ApiContext from "../contexts/ApiContext";
// import LayoutContext from "../contexts/LayoutContext";

function Products() {
  const { photos, photosAdmin, getDataDetileUser } = useContext(ApiContext);
  const isOtherUser = Object.keys(getDataDetileUser).length !== 0;

  return (
    <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 gap-1">
      {isOtherUser
        ? photosAdmin.map((photo) => <ProductItem photo={photo} />)
        : photos.map((photo) => <ProductItem photo={photo} />)}
    </div>
  );
}

export default Products;
