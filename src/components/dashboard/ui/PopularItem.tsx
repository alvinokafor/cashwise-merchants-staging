import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const products = [
    {
      name: 'Product 1',
      price: '$100,98883',
      brand: 'Brand A',
      status: 'active',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png'
    },
    {
      name: 'Product 2',
      price: '$200,00003',
      brand: 'Brand B',
      status: 'inactive',
      imageUrl: 'https://sabmadigital.com/wp-content/uploads/Photographie-de-produit-09.webp'
    },
    {
      name: 'Product 3',
      price: '$150,00903',
      brand: 'Brand A',
      status: 'active',
      imageUrl: 'https://off.com/-/media/images/off/en/products/large-collection/off_us_backyard_collection_large_2x.png'
    },
    {
      name: 'Product 4',
      price: '$300,0000',
      brand: 'Brand C',
      status: 'active',
      imageUrl: 'https://dealshareus.com/wp-content/uploads/2024/02/apple-devices-deals-this-month.jpg'
    },
  ];
  
  
  export default function PopularItem() {
    return (
    <div className="w-[300px]">

    <div className="flex items-center ml-3 mb-4 justify-between">
        <div className="bg-lightblue rounded-full h-6 w-3 mr-2"></div>

        <div className="text-lg font-semibold mr-auto">Popular Products</div>

    </div>
    <div className="flex justify-between mb-2">
    <h3 className="flex items-center justify-center px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">Products</h3>
    <h3 className="flex items-center justify-center px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
      Earnings
    </h3>
  </div>
  <hr/>
      <ul role="list" className="divide-y divide-gray-100">
        {products.map((product, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-md bg-gray-50" src={product.imageUrl} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.name}</p>
                {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.brand}</p> */}
                <p className="mt-1 truncate text-sm font-semibold leading-5 text-gray-500">{product.brand}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{product.price}</p>
              {product.status == "inactive" ? (
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                { product.status}
              </span>
              ) : (
                
                <div className="mt-1 flex items-center gap-x-1.5">
                 <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                { product.status}
                </span>
                </div>
              )}
            </div>
          </li> 
        ))}
      </ul>
      <a className="flex items-center justify-center rounded-lg border border-gray-300 bg-transparent gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
            <MdOutlineProductionQuantityLimits className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            All products
            </a>
      </div>
    )
  }
  