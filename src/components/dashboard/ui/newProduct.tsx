import React, { useState } from "react";
import Card from "@/components/general-ui/card";
// import LineCharts from "@/components/dashboard/modules/Linechart";
// import ToggleSwitchCard from '../modules/toggleSwitch';
import "./style.css";
import ImageView from "../modules/imageView";
import HeaderFilter from "@/components/general-ui/filterBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RiInformationLine } from "react-icons/ri";
import CustomDropdown from "./customSelect";
import ImageUploadCard from "./imageSelect";
import { FaDollarSign } from "react-icons/fa6";
import TagInput from "./tagAdd";

export default function NewProd() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [amount, setAmount] = useState("");

  // const handleAmountChange = (event) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Allow only numbers and one decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const handleTooltipVisibility = (isVisible: boolean) => {
    setTooltipVisible(isVisible);
  };

  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleToggle = (index: React.SetStateAction<number>) => {
  //   setActiveIndex(index);
  // };
  return (
    <div className="container flex flex-wrap justify-between p-6">
      <Card className="w-full sm:w-[62%] mb-4 mr-2">
        <HeaderFilter title={"Name & description"} color={"bg-purple-300"} />
        <div className="w-auto">
          <div className="mb-4 flex items-center relative">
            <label className="text-black font-medium mr-2">Product title</label>
            <RiInformationLine
              className="text-gray-400 cursor-pointer"
              onMouseEnter={() => handleTooltipVisibility(true)}
              onMouseLeave={() => handleTooltipVisibility(false)}
            />
            {tooltipVisible && (
              <span className="tooltip absolute top-full left-0 w-auto bg-gray-800 text-white text-sm rounded-md p-2 mt-1 pointer-events-none">
                Minimum 100 characters. No HTML or emoji allowed.
              </span>
            )}
          </div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-300 outline-none transition-colors duration-200"
          />
          <div className="mt-4">
            <div className="mb-2 flex items-center relative">
              <label className="text-black font-medium mb-2 block mr-2">
                Product Description
              </label>
              <RiInformationLine
                className="text-gray-400 cursor-pointer mt-[-6]"
                // onMouseEnter={() => handleTooltipVisibility(true)}
                // onMouseLeave={() => handleTooltipVisibility(false)}
              />
              {/* {tooltipVisible && (
              <span className="tooltip absolute top-full left-0 w-auto bg-gray-800 text-white text-sm rounded-md p-2 mt-1 pointer-events-none">
                Minimum 100 characters. No HTML or emoji allowed.
              </span>
            )} */}
            </div>
            <ReactQuill
              value={description}
              onChange={handleDescriptionChange}
              theme="snow"
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  ["link", "image"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ align: [] }],
                  ["clean"],
                ],
              }}
              className="border-2 border-gray-200 rounded-lg bg-gray-100 custom-quill-editor"

              // Set the minimum height of the textarea
            />
          </div>
        </div>
      </Card>

      {/* grid 2 card  */}
      <Card className="w-full sm:w-[36%] mb-4 mr-2">
        <HeaderFilter title={"Preview"} color={"bg-blue-200"} />
        {/* <PopularItem/> */}
        <div className="w-auto">
          <ImageView imageUrl="https://d1bltcifwhkdae.cloudfront.net/uploads/SocialMediaTemplates-HeaderBanner1-1024x754.png" />
        </div>
      </Card>

      {/* select dropdown field */}
      <Card className="w-full sm:w-[62%] mb-4 mr-2">
        <HeaderFilter title={"Store"} color={"bg-green-100"} />
        <div className="w-auto">
          <div className="mb-4 flex items-center relative">
            <label className="text-black font-medium mr-2">Store</label>
            <RiInformationLine className="text-gray-400 cursor-pointer" />
            <span className="tooltip absolute top-full left-0 w-40 bg-gray-800 text-white text-sm rounded-md p-2 mt-1 opacity-0 pointer-events-none transition-opacity duration-300">
              Minimum 100 characters. No HTML or emoji allowed.
            </span>
          </div>
          {/* <select
    value={title}
    onChange={handleTitleChange}
    className="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-300 outline-none transition-colors duration-200"
>
    <option value="">Select an item</option>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
</select> */}
          <CustomDropdown
            options={["Item 1", "Item 2", "Item 3"]}
            onSelect={(selectedOption) => {
              console.log("Selected option:", selectedOption);
            }}
          />
        </div>
      </Card>

      <Card className="w-full sm:w-[62%] mb-4 mr-2">
        <HeaderFilter title={"Images & CTA"} color={"bg-green-100"} />
        <div className="w-auto">
          <div className="mb-4 flex items-center relative">
            <label className="text-black font-medium mr-2">Cover Images</label>
            <RiInformationLine className="text-gray-400 cursor-pointer" />
            <span className="tooltip absolute top-full left-0 w-40 bg-gray-800 text-white text-sm rounded-md p-2 mt-1 opacity-0 pointer-events-none transition-opacity duration-300">
              Minimum 100 characters. No HTML or emoji allowed.
            </span>
          </div>

          <ImageUploadCard />
        </div>
      </Card>

      <Card className="w-full sm:w-[62%] mb-4 mr-2">
        <HeaderFilter title={"Price"} color={"bg-purple-300"} />
        <div className="w-auto">
          <div className="mb-4 flex items-center relative">
            <label className="text-black font-medium mr-2">Amount</label>
            <RiInformationLine
              className="text-gray-400 cursor-pointer"
              onMouseEnter={() => handleTooltipVisibility(true)}
              onMouseLeave={() => handleTooltipVisibility(false)}
            />
            {tooltipVisible && (
              <span className="tooltip absolute top-full left-0 w-auto bg-gray-800 text-white text-sm rounded-md p-2 mt-1 pointer-events-none">
                Minimum 100 characters. No HTML or emoji allowed.
              </span>
            )}
          </div>
          <div className="flex items-center">
            <div className="relative">
              <FaDollarSign
                color="#000"
                className="absolute top-1/2 transform -translate-y-1/2 left-3"
              />

              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Amount"
                className="flex-grow w-full pl-8 pr-2 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-300 outline-none transition-colors duration-200"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* select dropdown field */}
      <Card className="w-full sm:w-[62%] mb-4 mr-2">
        <HeaderFilter title={"Category & Tags"} color={"bg-green-100"} />
        <div className="w-auto">
          <div className="mb-4 flex items-center relative">
            <label className="text-black font-medium mr-2">Category</label>
            <RiInformationLine className="text-gray-400 cursor-pointer" />
            <span className="tooltip absolute top-full left-0 w-40 bg-gray-800 text-white text-sm rounded-md p-2 mt-1 opacity-0 pointer-events-none transition-opacity duration-300">
              Minimum 100 characters. No HTML or emoji allowed.
            </span>
          </div>
          <CustomDropdown
            options={["Item 1", "Item 2", "Item 3"]}
            onSelect={(selectedOption) => {
              console.log("Selected option:", selectedOption);
            }}
          />

          <div className="mt-5">
            <div className="mb-5 flex items-center relative">
              <label className="text-black font-medium mr-2">Tags</label>
              <RiInformationLine className="text-gray-400 cursor-pointer" />
              <span className="tooltip absolute top-full left-0 w-40 bg-gray-800 text-white text-sm rounded-md p-2 mt-1 opacity-0 pointer-events-none transition-opacity duration-300">
                Minimum 100 characters. No HTML or emoji allowed.
              </span>
            </div>
            <TagInput />
          </div>
        </div>
      </Card>
    </div>
  );
}
