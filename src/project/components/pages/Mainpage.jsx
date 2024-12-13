import React from 'react'
import NavBar from '../NavBar'
import Body from '../Body'
import Content from '../Content'
import Gallery from '../Gallery'
import Brands from '../Brands'
import Features from '../Features'
import Pricing from '../Pricing'
import Team from '../Team'
import Review from '../Review'
import Contact from '../Contact'
import Footer from '../Footer'


const Mainpage = ({change}) => {
  return (
    <div>
      <NavBar change={change}/>
      <Body />
      <Content />
      <Gallery />
      <Brands />
      <Features />
      <Pricing />
      <Team />
      <Review />
      <Contact />
      <Footer />
    </div>
  )
}

export default Mainpage
