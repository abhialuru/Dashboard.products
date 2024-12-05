import { NavLink } from "react-router-dom"
import {menu} from '../data.ts'
 
 
function Menu() {
  return (
    <div className="w-full"> 
  { menu.map((item)=>
      <div key={item.id} >
        <div className="py-2 text-gray-400">
      <span>{item.title}</span>
        </div>

      <div className="flex flex-col w-[95%]">
 { item.listItems.map((listitems)=>  
       <NavLink key={listitems.id} to={listitems.url}>
          <div className="flex text-center p-2 pl-4 gap-4 w-full hover:bg-gray-600 rounded-md">
            <img className="w-5 h-5" src={listitems.icon} alt="" />
            <span>{listitems.title}</span>
          </div>
      </NavLink>)}
      </div>
      </div>
      )
}
 
      </div>
    
  )
}

export default Menu