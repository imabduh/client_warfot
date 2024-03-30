import { useContext } from "react";
import { CiMail } from "react-icons/ci";
import ApiContext from "../contexts/ApiContext";
import LayoutContext from "../contexts/LayoutContext";

function UserItem({ user }) {
  const { setGetDataDetileUser } = useContext(ApiContext);
  const { setIsProductDetile } = useContext(LayoutContext);

  return (
    <div
      onClick={() => {
        setGetDataDetileUser(user);
        setIsProductDetile(false);
      }}
      className="flex items-center mb-3 justify-between h-full w-full "
    >
      <div className="flex items-center justify-start h-full w-full gap-3">
        <img
          src={user.url}
          alt="kiotaka"
          style={{ width: 40, height: 40 }}
          className=" rounded-full object-cover"
        />
        <div className="w-full h-full sm:w-3/4">
          <div className="font-bold truncate block">{user.name}</div>
          <h5 className="font-bold text-xs text-zinc-600 truncate">
            {user.email}
          </h5>
        </div>
      </div>
      <div className="h-full flex items-center justify-center border-l border-zinc-700 pl-3">
        <CiMail size={20} />
      </div>
    </div>
  );
}

export default UserItem;
