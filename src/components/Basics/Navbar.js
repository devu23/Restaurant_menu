import React from 'react'

const Navbar = ({FilterItem,MenuList}) => {
  return (


    <>
<nav className='navbar'>
      <div className="btn-group">
   { MenuList.map((currelement)=>{
      return( 
         <button className="btn-group__item" onClick={()=> FilterItem(currelement)}>{currelement}</button>
         );
      })}  
      </div>
      </nav>
    </>
  )
}

export default Navbar