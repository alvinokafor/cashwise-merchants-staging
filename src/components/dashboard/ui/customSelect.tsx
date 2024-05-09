import React, { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi'; // Import the dropdown icon

// const CustomDropdown = ({ options, onSelect }) => {
const CustomDropdown = ({ options, onSelect }: { options: any[]; onSelect: (option: any) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const handleOptionClick = (option) => {
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between w-full p-2 border-2 border-gray-200 rounded-lg focus:border-blue-300 outline-none transition-colors duration-200 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div>{selectedOption || 'Select an item'}</div>
        <div className="ml-2">
          <HiOutlineChevronDown className={`text-gray-500 ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-md border border-gray-200 rounded-lg">
          {options.map((option) => (
            <div
              key={option}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
