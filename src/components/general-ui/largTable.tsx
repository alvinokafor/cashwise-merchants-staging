import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaSearch, FaChevronLeft, FaChevronRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoIosMore, IoIosSettings, IoIosCopy, IoIosTrash  } from "react-icons/io";

const DataTables = ({ data }) => {
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
    <div className="overflow-x-auto w-[100%] sm:w-full rounded-lg">
      {/* Search */}
      <div className="flex items-center justify-between mb-4 px-4 py-2">
        <div className='flex items-center justify-between'>
          {/* Empty badge with blue color */}
          <div className="bg-orange-400 rounded-full h-6 w-3 mr-2"></div>

          {/* Title "Overview" */}
          <div className="text-lg font-semibold mr-auto">Products</div>

          <div className="relative ml-3 rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-1">
              <CiSearch size={20}/>
            </div>
            <input
              type="text"
              name="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 focus:outline-none focus:border-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
              placeholder="Search or type a command.."
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded shadow-sm focus:ring-blue-400"/>
              </label>
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="transition duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md">
              <td className="px-2 py-2 whitespace-nowrap">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded border-5 border-gray-500 shadow-sm focus:ring-blue-400" />
                </label>
              </td>
              <td className="px-1 py-2 whitespace-nowrap">
                <div className="inline-flex items-center justify-between">
                  <img src={item.image} alt="Product" className="h-16 w-17 rounded" />
                  <div className='pl-3'>
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm font-light text-gray-500">{item.category}</div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  <span className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-bold ring-1 ring-inset ${item.status === 'Active' ? 'bg-green-50 text-green-700 ring-green-600/10' : 'bg-red-50 text-red-700 ring-red-600/10'}`}>
                    {item.status}
                  </span>
                </div>
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.price}</div>
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
                <div className="flex items-center justify-center">
                  <div className="text-sm font-medium text-gray-900">
                    <span className="inline-flex items-center justify-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {item.views}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 mt-1 rounded-full">
                    <div className="w-3/4 bg-blue-400 h-full rounded-full"></div>
                  </div>
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

export default DataTables;
