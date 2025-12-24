import React from 'react'
import "./Home.css"
import Welcome from '../../Compontents/Welcome/Welcome'
import Buyrent from "../../Compontents/Buyrent/Buyrent"
import Cards from '../../Compontents/Cards/Cards'
import CardBuy from '../../Compontents/CardBuy/CardBuy'
import ContactSection from "../../Compontents/ContactSection/ContactSection"
import ClientsStories from "../../Compontents/ClientsStories/ClientsStories"

export default function Home() {
  return (
    <div>
      <Welcome/>
      <Buyrent/>
      <Cards/>
      <CardBuy/>
            <ClientsStories/>

      <ContactSection/>
    </div>
  )
}
