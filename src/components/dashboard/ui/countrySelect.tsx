const countries = [
  {
    name: "USA State",
    population: "331,449,281",
    capital: "Washington, D.C.",
    imageUrl: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
  },
  {
    name: "China",
    population: "1,444,216,107",
    capital: "Beijing",
    imageUrl: "https://www.worldometers.info/img/flags/small/tn_ch-flag.gif",
  },
  {
    name: "India",
    population: "1,393,409,038",
    capital: "New Delhi",
    imageUrl: "https://www.worldometers.info/img/flags/small/tn_in-flag.gif",
  },
  {
    name: "Indonesia",
    population: "276,361,783",
    capital: "Jakarta",
    imageUrl: "https://www.worldometers.info/img/flags/small/tn_id-flag.gif",
  },
  {
    name: "Pakistan",
    population: "225,199,937",
    capital: "Islamabad",
    imageUrl: "https://www.worldometers.info/img/flags/small/tn_pk-flag.gif",
  },
];

export default function CountrySelect() {
  return (
    <div className="w-[310px] items-center">
      <div className="flex items-center ml-3 mb-4 justify-between">
        <div className="bg-lightblue rounded-full h-6 w-4 mr-2"></div>

        <div className="text-lg font-semibold mr-auto">Top Countries</div>
      </div>
      {/* <div className="flex justify-between mb-2">
    <h3 className="flex items-center justify-center px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">Products</h3>
    <h3 className="flex items-center justify-center px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
      Earnings
    </h3>
  </div> */}
      <hr />
      <ul role="list" className="divide-y divide-gray-100">
        {countries.map((countries, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-x-8 py-4"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200">
                <img
                  className="h-5 w-5 border-spacing-8 rounded-full bg-gray-50"
                  src={countries.imageUrl}
                  alt=""
                />
              </div>
              <p className="text-sm font-bold leading-10 text-gray-900">
                {countries.name}
              </p>
              {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.brand}</p> */}
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 font-semibold text-gray-900">
                {countries.population}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* <a className="flex items-center justify-center rounded-lg border border-gray-300 bg-transparent gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
            <MdOutlineProductionQuantityLimits className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            All products
            </a> */}
    </div>
  );
}
