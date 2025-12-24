import React from 'react'
import HeroSectionBuy from "../../Compontents/HeroSectionBuy/HeroSectionBuy"
import CardsBuy from "../../Compontents/CardsBuy/CardsBuy"
import Filter from "../../Compontents/Filter/Filter"
export default function Buy() {
  return (
    <div>
      
      <HeroSectionBuy/>
      {/* <div className="container my-5">
      <Filter/>
    </div> */}
      <CardsBuy/>
    </div>
  )
}
