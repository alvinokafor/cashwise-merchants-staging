import React,{useState} from 'react';
import Card from '@/components/general-ui/card';
import LineCharts from "@/components/dashboard/modules/Linechart";
import ToggleSwitchCard from '../modules/toggleSwitch';

import BarChart from '../modules/BarChart';
import HeaderFilter from '@/components/general-ui/filterBar';
import PopularItem from './PopularItem';


export default function Dashbord() {
  
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleToggle = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };
  return (
    <div className='container flex flex-wrap justify-between p-6'>
      {/* grid on card */}
      <div>
      <Card className="w-full sm:w-[720px] mb-4 mr-2">
    
      <HeaderFilter title={"Overview"} color={"bg-orange-400"}/>
      <ToggleSwitchCard activeIndex={activeIndex} handleToggle={handleToggle} />
      {activeIndex === 0 && <LineCharts />}
      {activeIndex === 1 && <BarChart />}

      </Card>
      {/* second barchart */}
      <Card className="w-full sm:w-auto mb-4 mr-2">
        <HeaderFilter title={"Product view"} color={"bg-purple-400"}/>
        <BarChart/>
      </Card>
      </div>

      {/* grid 2 card  */}
      <Card className="w-full sm:w-auto h-[550px] mb-4 mr-2">
        <PopularItem/>
      </Card>
    </div>
  )
}
