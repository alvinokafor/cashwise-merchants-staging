import { FaArrowDown, FaCartFlatbedSuitcase } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

// const ToggleSwitchCard = ({ activeIndex, handleToggle }) => {
const ToggleSwitchCard = ({
  activeIndex,
  handleToggle,
}: {
  activeIndex: number;
  handleToggle: (index: number) => void;
}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-2 mb-8 ml-6 flex justify-between">
      <div
        className={`bg-gray-100 rounded-lg p-4 flex-1 mr-4 cursor-pointer ${
          activeIndex === 0 ? "bg-white shadow-md" : ""
        }`}
        onClick={() => handleToggle(0)}
      >
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-medium text-gray-600 ml-10">
              Customers
            </h3>
            <BsInfoCircleFill className="ml-2" color="gray" />
          </div>
          <div className="flex items-center justify-center">
            {" "}
            {/* Added items-center and justify-center */}
            <span className="rounded-full ml-30 bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <FaCartFlatbedSuitcase size={20} />
            </span>
            <h1 className="text-4xl font-bold">2504</h1>
          </div>
          <span className="inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-700 ring-1 ring-inset ring-red-600/10">
            {" "}
            {/* Added justify-center */}
            <FaArrowDown /> 3.88%
          </span>
        </div>
      </div>
      <div
        className={`bg-gray-100 rounded-lg p-5 flex-1 cursor-pointer duration-700 ${
          activeIndex === 1 ? "bg-white shadow-md" : ""
        }`}
        onClick={() => handleToggle(1)}
      >
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-medium text-gray-600 ml-10">Income</h3>
            <BsInfoCircleFill className="ml-2" color="gray" />
          </div>
          <div className="flex items-center justify-center">
            {" "}
            {/* Added items-center and justify-center */}
            <span className="rounded-full ml-30 bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <FaCartFlatbedSuitcase size={20} />
            </span>
            <h1 className="text-4xl font-bold">4504k</h1>
          </div>
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            <FaArrowDown /> 3.88%
          </span>
        </div>
        {/* {activeIndex === 1 && <div className="bg-blue-500 w-4 h-4 rounded-full" />} */}
      </div>
    </div>
  );
};

export default ToggleSwitchCard;
