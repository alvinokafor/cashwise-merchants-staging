import React,{useState} from 'react';
import Card from '@/components/general-ui/card';
import LineCharts from "@/components/dashboard/modules/Linechart";
import ToggleSwitchCard from '../modules/toggleSwitch';

import BarChart from '../modules/BarChart';
import HeaderFilter from '@/components/general-ui/filterBar';
import PopularItem from './PopularItem';
import CardList from '../modules/CardList';
import DataTable from '@/components/general-ui/table';
import StylesDataTables from '@/components/general-ui/stylesTable';
import CardListModul from '../modules/CardlistModul';
import CountrySelect from './countrySelect';


export default function EarningDashboard() {
    const data = [
        {
          id: 1,
          date: 'Fri, Apr 9',
          name: 'Smartphone X',
          status: 'Pending',
          earning: '$799.00',
          totalSales: 100,
          percentage: 10,
        },
        {
          id: 2,
          date: 'Tue, Mar 15',
          name: 'Tablet Y',
          status: 'Delivered',
          earning: '$599.00',
          totalSales: 150,
          percentage: -5,
        },
        {
          id: 3,
          date: 'Sat, May 22',
          name: 'Laptop Z',
          status: 'Shipped',
          earning: '$1299.00',
          totalSales: 80,
          percentage: 15,
        },
        {
          id: 4,
          date: 'Mon, Jun 7',
          name: 'Smartwatch A',
          status: 'Pending',
          earning: '$349.00',
          totalSales: 200,
          percentage: -8,
        },
        {
          id: 5,
          date: 'Wed, Aug 18',
          name: 'Headphones B',
          status: 'Cancelled',
          earning: '$99.00',
          totalSales: 50,
          percentage: 20,
        },
        {
          id: 6,
          date: 'Thu, Sep 30',
          name: 'Speaker C',
          status: 'Delivered',
          earning: '$199.00',
          totalSales: 120,
          percentage: -12,
        },
        {
          id: 7,
          date: 'Fri, Oct 15',
          name: 'Camera D',
          status: 'Shipped',
          earning: '$499.00',
          totalSales: 90,
          percentage: 25,
        },
        {
          id: 8,
          date: 'Sun, Nov 28',
          name: 'Monitor E',
          status: 'Pending',
          earning: '$899.00',
          totalSales: 180,
          percentage: -3,
        },
        {
          id: 9,
          date: 'Mon, Dec 6',
          name: 'Keyboard F',
          status: 'Delivered',
          earning: '$49.00',
          totalSales: 30,
          percentage: 18,
        },
        {
          id: 10,
          date: 'Tue, Jan 4',
          name: 'Mouse G',
          status: 'Cancelled',
          earning: '$29.00',
          totalSales: 20,
          percentage: 12,
        },
      ];
      
      
      
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleToggle = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };
  return (
    <div className='container flex flex-wrap justify-between p-6'>
      {/* grid on card */}
      <Card className="w-full sm:w-full mb-4 mr-2">
      <CardListModul/>

      </Card>
      {/* second barchart */}
      <Card className="w-full sm:w-[66%] mb-4 mr-2">
        <HeaderFilter title={"Product sales"} color={"bg-purple-200"}/>
        <BarChart/>
        
      </Card>

      {/* grid 2 card  */}
      <Card className="w-full sm:w-auto mb-4 mr-2">
        {/* <PopularItem/> */}
        <div className='w-auto'>
        <CountrySelect/>
        </div>
        
      </Card>
      <Card className="w-full sm:w-[100%] h-auto mb-4 mr-2">
        {/* <PopularItem/> */}
        {/* <div className='w-[300px]'> */}
        <StylesDataTables data={data} />
        
      </Card>
    </div>
  )
}
