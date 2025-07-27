import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Exploremenu from '../../components/Navbar/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { food_list } from '../../assets/assets'

const Home = () => {

  const [category,setcategory] = useState("All");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category} food_list={food_list}/>
      <AppDownload/>
    </div>
  )
}

export default Home
