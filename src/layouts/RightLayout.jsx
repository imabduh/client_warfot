import { useContext, useState } from "react";
import ApiContext from "../contexts/ApiContext";
import LayoutContext from "../contexts/LayoutContext";

function RightLayout() {
  const { admin, getDataDetileUser, setGetDataDetileUser } =
    useContext(ApiContext);
  const { isEdit, setIsEdit, setIsProductDetile } = useContext(LayoutContext);
  const [nameEdit, setNameEdit] = useState("");
  const [descEdit, setDescEdit] = useState("");
  const isOtherUser = Object.keys(getDataDetileUser).length !== 0;

  if (isOtherUser) {
    setIsEdit(false);
  }

  function handleSaveData() {}
  return (
    <div className="w-1/2 h-full max-lg:hidden">
      <div className="pt-6 px-3">
        <div className="flex justify-center items-center flex-col gap-6 text-center">
          <img
            src={isOtherUser ? getDataDetileUser.url : admin.url}
            alt={isOtherUser ? getDataDetileUser.name : admin.name}
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="flex justify-center items-center flex-col">
            {isEdit ? (
              <input
                type="text"
                placeholder="Edit Nama"
                className="text-center bg-zinc-800"
                defaultValue={admin.name}
                onChange={(e) => setNameEdit(e.currentTarget.value)}
              />
            ) : (
              <h5 className="font-bold">
                {isOtherUser ? getDataDetileUser.name : admin.name}
              </h5>
            )}
            <h5 className="font-bold text-sm">
              {isOtherUser ? getDataDetileUser.email : admin.email}
            </h5>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full">
              <div className="text-xs">Contents</div>
              <div>
                {isOtherUser
                  ? getDataDetileUser.lengthContents
                  : admin.lengthContents}
              </div>
            </div>
            <div className="w-full h-full border-x border-zinc-700">
              <div className="text-xs">Downloads</div>
              <div>
                {isOtherUser
                  ? getDataDetileUser.lengthDownloads
                  : admin.lengthDownloads}
              </div>
            </div>
            <div className="w-full">
              <div className="text-xs">Favorites</div>
              <div>
                {isOtherUser
                  ? getDataDetileUser.lengthFavorites
                  : admin.lengthFavorites}
              </div>
            </div>
          </div>
          <p className="text-sm border-y w-full py-3 border-zinc-700">
            {isEdit ? (
              <textarea
                className="w-full h-28 bg-zinc-800"
                placeholder="Edit Deskripsi"
                onChange={(e) => setDescEdit(e.currentTarget.value)}
                defaultValue={admin.desc}
              ></textarea>
            ) : isOtherUser ? (
              getDataDetileUser.desc
            ) : (
              admin.desc
            )}
          </p>

          <div className="w-full flex justify-center items-center gap-3">
            {isOtherUser ? (
              <div
                onClick={() => {
                  setGetDataDetileUser({});
                  setIsProductDetile(false);
                }}
                className="w-full border-x-2 border-zinc-700 bg-zinc-900 p-1"
              >
                <div className="text-xs">Kembali</div>
              </div>
            ) : (
              <div className="w-full border-x-2 border-zinc-700 bg-zinc-900 p-1">
                <div onClick={() => setIsEdit(!isEdit)} className="text-xs">
                  {isEdit ? "Batal" : "Edit"}
                </div>
              </div>
            )}
            {isEdit ? (
              <div
                onClick={handleSaveData}
                className="w-full border-x-2 border-zinc-700 bg-zinc-900 p-1"
              >
                <div className="text-xs">Simpan</div>
              </div>
            ) : null}
            <div
              onClick={() => {}}
              className="w-full border-x-2 border-zinc-700 bg-zinc-900 p-1"
            >
              <div className="text-xs">Keluar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightLayout;
