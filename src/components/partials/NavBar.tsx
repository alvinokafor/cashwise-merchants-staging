import { Box } from "@radix-ui/themes";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsFileImageFill, BsPerson, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import {RiDashboardFill} from "react-icons/ri";
import { MdAddHomeWork,MdProductionQuantityLimits } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function NavBar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    {title: "Home", icon: <MdAddHomeWork />},
    // {title: "Page", icon: <AiOutlineFileText />},
    // {title: "Product", spacing:true, icon: <BsFileImageFill />},
    {
      title: "Product",
      submenu:true, 
      submenuItems:[
        {title: "Dashboard"},
        {title: "Draft"},
        {title: "Release"},
      ],
      icon: <MdProductionQuantityLimits />,
    },
    {
      title: "Customers",
      submenu:true, 
      submenuItems:[
        {title: "Overview"},
        {title: "Orders"},
      ],
      icon: <LiaUsersSolid />,
    },
    {title: "Shop", icon: <FaShop />},
    {
      title: "Income",
      submenu:true, 
      submenuItems:[
        {title: "Earning"},
        {title: "Refunds"},
        {title: "Payouts"},
        {title: "Statements"},
      ],
      icon: <AiOutlineBarChart />,
    },
    {title: "Promote", icon: <AiOutlineMail />},
    // {title: "Profile",spacing:true,icon: <BsPerson />},
    // {title: "Setting", icon: <AiOutlineSetting />},
    // {title: "Logout", icon: <AiOutlineLogout />},
  ];
  return (
      <div className={`bg-white h-screen container p-5 pt-8 ${open ? "w-64" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className="inline-flex">
        <AiFillEnvironment className={` bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${ open && "rotate-[360deg]"}`}/>
        <h1 className={`text-black origin-left font-medium text=2xl duration-300 ${!open && "scale-0"}`}>
          Cash Wise
        </h1>
        </div>

        <ul className="p-2">
          {Menus.map((menu, index) => (
            <>
            <li key={index} className={`text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer pt-2 pb-2 hover:bg-gray-300 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <RiDashboardFill/>}
              </span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                {menu.title}
              </span>
              {menu.submenu && open && (
                <BsChevronDown className={`${submenuOpen && "rotate-180"}`}
                onClick={() => setSubmenuOpen(!submenuOpen)}/>
              )}
            </li>
            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
            </>
          ))}
        </ul>
      </div> 
    // <Box>NavBar</Box>
  )
}
