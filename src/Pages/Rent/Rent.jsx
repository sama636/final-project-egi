import React from 'react'
import HeroSectionRent from '../../Compontents/HeroSectionRent/HeroSectionRent'
import CardsRent from '../../Compontents/CardsRent/CardsRent'
import Filter from '../../Compontents/Filter/Filter'

export default function Rent() {
  return (
    <div>
<HeroSectionRent/>
{/* <div className="container my-5">
      <Filter/>
    </div> */}
<CardsRent/>
    </div>
  )
}
