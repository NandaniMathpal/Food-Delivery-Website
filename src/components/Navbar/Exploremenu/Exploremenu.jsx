import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quos dicta magni atque explicabo dignissimos minima. Ex dignissimos aliquid delectus neque! Repellendus voluptas quas blanditiis cum deleniti in natus dignissimos ullam dolor temporibus, alias nesciunt sed sint, hic odit aspernatur necessitatibus velit commodi consequuntur maiores adipisci reprehenderit animi! Earum, fugiat.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Exploremenu
