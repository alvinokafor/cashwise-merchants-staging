import React,{useState} from 'react';
import Card from '@/components/general-ui/card';
import LineCharts from "@/components/dashboard/modules/Linechart";
import ToggleSwitchCard from '../modules/toggleSwitch';

import BarChart from '../modules/BarChart';
import HeaderFilter from '@/components/general-ui/filterBar';
import PopularItem from './PopularItem';
import CardList from '../modules/CardList';
import DataTable from '@/components/general-ui/table';
import DataTables from '@/components/general-ui/largTable';


export default function ProdDashbord() {
    const data = [
        {
          id: 1,
          image: 'https://via.placeholder.com/50',
          name: 'Smartphone X',
          category: 'Electronics',
          status: 'Active',
          price: '$799',
          totalSales: 100,
          views: 500,
          percentage: 20,
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/50',
          name: 'Laptop Y',
          category: 'Electronics',
          status: 'Inactive',
          price: '$1299',
          totalSales: 150,
          views: 300,
          percentage: -10,
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/50',
          name: 'Headphones Z',
          category: 'Electronics',
          status: 'Active',
          price: '$149',
          totalSales: 200,
          views: 400,
          percentage: 30,
        },
        {
          id: 4,
          image: 'https://via.placeholder.com/50',
          name: 'Fitness Tracker A',
          category: 'Health & Fitness',
          status: 'Inactive',
          price: '$99',
          totalSales: 250,
          views: 600,
          percentage: -15,
        },
        {
          id: 5,
          image: 'https://via.placeholder.com/50',
          name: 'Coffee Maker B',
          category: 'Home & Kitchen',
          status: 'Active',
          price: '$49',
          totalSales: 300,
          views: 700,
          percentage: 25,
        },
        {
          id: 6,
          image: 'https://via.placeholder.com/50',
          name: 'Bluetooth Speaker C',
          category: 'Electronics',
          status: 'Active',
          price: '$79',
          totalSales: 350,
          views: 800,
          percentage: 15,
        },
        {
          id: 7,
          image: 'https://via.placeholder.com/50',
          name: 'Backpack D',
          category: 'Fashion & Accessories',
          status: 'Inactive',
          price: '$59',
          totalSales: 400,
          views: 900,
          percentage: -20,
        },
        {
          id: 8,
          image: 'https://via.placeholder.com/50',
          name: 'Gaming Mouse E',
          category: 'Electronics',
          status: 'Active',
          price: '$39',
          totalSales: 450,
          views: 1000,
          percentage: 10,
        },
        {
          id: 9,
          image: 'https://via.placeholder.com/50',
          name: 'Plant-Based Protein Powder F',
          category: 'Health & Fitness',
          status: 'Active',
          price: '$29',
          totalSales: 500,
          views: 1100,
          percentage: 5,
        },
        {
          id: 10,
          image: 'https://via.placeholder.com/50',
          name: 'Smart Thermostat G',
          category: 'Home & Kitchen',
          status: 'Inactive',
          price: '$129',
          totalSales: 550,
          views: 1200,
          percentage: -5,
        },
      ];
      
      
  // const [activeIndex, setActiveIndex] = useState(0); 

  // const handleToggle = (index: React.SetStateAction<number>) => {
  //   setActiveIndex(index);
  // };
  return (
    <div className='container flex flex-wrap justify-between p-6'>
      {/* grid on card */}
      <Card className="w-full sm:w-full mb-4 mr-2">
    
      <HeaderFilter title={"Overview"} color={"bg-orange-300"}/>
      <CardList/>

      </Card>
      {/* second barchart */}
      <Card className="w-full sm:w-[62%] mb-4 mr-2">
        <HeaderFilter title={"Product activity"} color={"bg-purple-300"}/>
        {/* <BarChart/> */}
        <DataTable/>
      </Card>

      {/* grid 2 card  */}
      <Card className="w-full sm:w-[36%] mb-4 mr-2">
      <HeaderFilter  title={"Product view"} color={"bg-gray-100"}/>
        {/* <PopularItem/> */}
        <div className='w-auto'>
            <BarChart/>
        </div>
        
      </Card>
      <Card className="w-full sm:w-[100%] h-auto mb-4 mr-2">
        {/* <PopularItem/> */}
        {/* <div className='w-[300px]'> */}
        <DataTables data={data} title={"Products"} />
        
      </Card>
    </div>
  )
}
