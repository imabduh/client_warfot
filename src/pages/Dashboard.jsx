import LeftLayout from "../layouts/LeftLayout";
import MiddleLayout from "../layouts/MiddleLayout";
import RightLayout from "../layouts/RightLayout";

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950 text-zinc-400">
      <LeftLayout />
      <MiddleLayout />
      <RightLayout />
    </div>
  );
}

export default Dashboard;
