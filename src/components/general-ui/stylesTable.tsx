import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaSearch, FaChevronLeft, FaChevronRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoIosMore, IoIosSettings, IoIosCopy, IoIosTrash  } from "react-icons/io";

const StylesDataTables = ({ data }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 5;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <div className="overflow-x-auto w-full sm:w-full rounded-lg">
   

      {/* Table */}
      <table className="table-auto w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product sales count</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="transition duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md">
               <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.date}</div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  <span className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset ${item.status === 'Delivered' ? 'bg-green-50 text-green-700 ring-green-600/10' : 'bg-red-50 text-red-700 ring-red-600/10'}`}>
                    {item.status}
                  </span>
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.earning}</div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap flex items-center mt-[25px]">
                <div className="text-sm font-medium text-gray-900">
                  <span className="inline-flex items-center justify-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    ${item.totalSales}
                  </span>
                </div>
                <div className="ml-1">
                  {item.percentage && (
                    <span className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-bold ${item.percentage > 0 ? 'text-green-700' : 'text-red-700'}`}>
                      {item.percentage > 0 ? <FaArrowUp /> : <FaArrowDown />}
                      {item.percentage}%
                    </span>
                  )}
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="flex items-center justify-between ml-2 space-x-4">
                  <div className='border rounded-full border-white'><CiEdit/></div>
                  <TfiCommentAlt/>
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-gray-500 hover:text-gray-800 focus:outline-none"
                      aria-label="More options"
                    >
                      <IoIosMore />
                    </button>
                    {openDropdown === index && (
                      <ul className="absolute right-0 z-10 mt-2 py-1 bg-white border border-gray-200 rounded-md shadow-lg">
                        <li>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none">
                            <IoIosSettings className="mr-2" /> Edith title & discription
                          </button>
                        </li>
                        <li>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none">
                            <IoIosCopy className="mr-2" /> Get shearable link
                          </button>
                        </li>
                        <li>
                          <button className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900 focus:outline-none">
                            <IoIosTrash className="mr-2" /> Delete forever
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={() => paginate(currentPage === 1 ? 1 : currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <FaChevronLeft />
        </button>
        {/* <span className="mx-4">Page {currentPage}</span> */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
          className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StylesDataTables;
