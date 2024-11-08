import { FaLaptopCode } from "react-icons/fa";
import { RiDiscussLine } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-full min-w-full pl-4 py-2">
        <h1 className="text-2xl font-bold mb-5 text-black">Welcome User!</h1>

        <div className="flex space-x-4">
          <a
            href="/playground"
            className="flex flex-col items-center text-center justify-between w-full p-4 border rounded bg-gray-200"
          >
            <FaLaptopCode size={40} />
            <span>Playground</span>
          </a>
          <a
            href="/devdiscuss"
            className="flex flex-col items-center justify-between w-full p-4 border rounded bg-gray-200"
          >
            <RiDiscussLine size={40} />
            <span>DevDiscuss</span>
          </a>
          <a
            href="/learn"
            className="flex flex-col items-center justify-between w-full p-4 border rounded bg-gray-200"
          >
            <MdOutlineOndemandVideo size={40} />
            <span>Learn</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
