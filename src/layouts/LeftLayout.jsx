import Users from "../components/Users";

function LeftLayout() {
  return (
    <div className="w-1/2 flex justify-center flex-col items-center h-full max-sm:hidden">
      <div className=" h-full w-full flex justify-center flex-col items-center">
        <div className="px-3 w-full">
          <h1 className="pt-3 font-bold text-lg">WARFOT</h1>
          <input
            type="text"
            placeholder="Cari Pengguna"
            className="my-3 w-full bg-transparent border-x-2 border-zinc-700 bg-zinc-900 text-center text-sm outline-none"
          />
        </div>
        <div className="h-full w-full overflow-y-scroll">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default LeftLayout;
