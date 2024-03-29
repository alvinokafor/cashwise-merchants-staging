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
import DraftTables from '@/components/general-ui/DraftTable';


export default function DraftDashboard() {
    const data = [
        {
          image: 'https://via.placeholder.com/150',
          name: 'Smartphone X',
          link: 'https://www.smartphoneX.com',
          price: '$799.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Laptop Y',
          link: 'https://www.laptopY.com',
          price: '$1299.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Headphones Z',
          link: 'https://www.headphonesZ.com',
          price: '$149.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Fitness Tracker A',
          link: 'https://www.fitnessTrackerA.com',
          price: '$99.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Coffee Maker B',
          link: 'https://www.coffeeMakerB.com',
          price: '$49.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Bluetooth Speaker C',
          link: 'https://www.bluetoothSpeakerC.com',
          price: '$79.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Backpack D',
          link: 'https://www.backpackD.com',
          price: '$59.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Gaming Mouse E',
          link: 'https://www.gamingMouseE.com',
          price: '$39.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Plant-Based Protein Powder F',
          link: 'https://www.proteinPowderF.com',
          price: '$29.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Smart Thermostat G',
          link: 'https://www.smartThermostatG.com',
          price: '$129.00',
          date: 'Apr 15, 2024 at 20:35 PM'
        }
      ];
      
      
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleToggle = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };
  return (
    <div className='container flex flex-wrap justify-between p-6'>
      {/* grid on card */}
      

  
      <Card className="w-full sm:w-[100%] h-auto mb-4 mr-2">
      {/* <HeaderFilter title={"Draft products"} color={"bg-purple-300"} /> */}
        {/* <div className='w-[300px]'> */}
        <DraftTables data={data} />
        
      </Card>
    </div>
  )
}
