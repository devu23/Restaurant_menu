import React, { useState } from 'react';
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';



const UniqueList =  [...new Set (Menu.map ((currelement)=>{
return  currelement.category;
})),
"All"
];

// console.log(UniqueList);

const Restaurant = () => {
    // const myStyle ={   // internal css
    //     color:"red"
    // }


const [menuData,setMenuData]= useState(Menu);
const [MenuList,SetMenuList] = useState(UniqueList);

const FilterItem = (category)=>{

    if (category==="All"){
      return   setMenuData(Menu);
    }
    const UpdatedMenu = Menu.filter((curElement)=>{
        return curElement.category === category;
    })
    setMenuData(UpdatedMenu);

};


    return (
        <>
       <Navbar FilterItem={FilterItem}  MenuList = {MenuList}/>

        <MenuCard menuData={menuData} />
           
        </>
    )
}
export default Restaurant; 