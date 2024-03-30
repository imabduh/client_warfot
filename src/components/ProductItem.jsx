import { useContext } from "react";
import LayoutContext from "../contexts/LayoutContext";
import ApiContext from "../contexts/ApiContext";

function ProductItem({ photo }) {
  const { setIsProductDetile } = useContext(LayoutContext);
  const { setGetDataDetileProduct } = useContext(ApiContext);

  return (
    <div
      onClick={() => {
        setIsProductDetile(true);
        setGetDataDetileProduct(photo);
      }}
      className="bg-zinc-700 h-36"
    >
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${photo.url})`,
        }}
        className="h-full "
      ></div>
    </div>
  );
}

export default ProductItem;
