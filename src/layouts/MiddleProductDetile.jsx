import { useContext } from "react";
import LayoutContext from "../contexts/LayoutContext";
import ApiContext from "../contexts/ApiContext";

function MiddleProductDetile() {
  const { setIsProductDetile } = useContext(LayoutContext);
  const { getDataDetileProduct } = useContext(ApiContext);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${getDataDetileProduct.url})`,
          }}
          className="h-4/6 w-full max-sm:h-1/4"
        >
          {/* <div className="h-full flex justify-start items-start ">
            <div className="border-x border-zinc-700 p-2 text-sm">Kembali</div>
          </div> */}
        </div>
        <div className="flex justify-between items-center text-center text-sm">
          <div onClick={() => setIsProductDetile(false)} className="bg-zinc-800 py-1 px-3">
            Kembali
          </div>
          <div className="flex justify-end">
            <div className="py-1 px-3">
              Diunduh {getDataDetileProduct.lengthFavoriteProduct}x
            </div>
            <div className="py-1 px-3 border-x border-zinc-700">
              Disukai {getDataDetileProduct.lengthDownloadProduct}x
            </div>
            <div className="py-1 px-12 bg-zinc-800">
              Beli Rp. {getDataDetileProduct.price.toLocaleString("id")}
            </div>
          </div>
        </div>
        <div className="py-3">
          <h5 className="font-bold">{getDataDetileProduct.name}</h5>
          <p>{getDataDetileProduct.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleProductDetile;
