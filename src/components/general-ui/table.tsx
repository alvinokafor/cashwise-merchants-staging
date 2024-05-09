import  { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa6';

const DataTable = () => {
  const [filter, setFilter] = useState('');
  const data = [
    { id: 1, date: '25 Sep - 1 Oct', productCount: 100, viewsCount: 2000, percentage: 800, like: 28, comment: 30 },
    { id: 2, date: '30 Oct - 24 Dec', productCount: 150, viewsCount: 2500, percentage: 1, like: 28, comment: 30 },
    { id: 3, date: '01 Jun - 20 Nov', productCount: 120, viewsCount: 2200, percentage: 7, like: 28, comment: 30 },
    // Add more data here
  ];

  const filteredData = data.filter((item) =>
    item.date.toLowerCase().includes(filter.toLowerCase())
  );

  // const handleFilterChange = (e) => {
  //   setFilter(e.target.value);
  // };

  return (
    <div className="overflow-x-auto w-[100%] sm:w-[100%] rounded-lg">
      {/* <div className="flex justify-between items-center bg-white px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <label htmlFor="filter" className="text-gray-600 font-medium mr-2">
            Filter:
          </label>
          <input
            type="text"
            id="filter"
            className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:border-blue-400"
            placeholder="Search by date"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div> */}
      <table className="min-w-[100%] divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Product
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Views
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Likes
            </th>
           
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item.id}
              className="transition duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.date}</div>
              </td>
              

              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <div className="text-sm font-medium text-gray-900">
                  <span className="inline-flex items-center justify-center rounded-md bg-lightgreen px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {item.productCount}
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
          

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center justify-center">
                <div className="text-sm font-medium text-gray-900">
                    <span className="inline-flex items-center justify-center rounded-md bg-lightpurple px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    ${item.viewsCount}
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
                </div>
              </td>
             
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <div className="text-sm font-medium text-gray-900">
                  <span className="inline-flex items-center justify-center rounded-md bg-lightyellow px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {item.like}
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

              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
