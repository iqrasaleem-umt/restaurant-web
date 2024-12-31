import React from 'react'
import Hero from './views/hero'
import Menu from './views/menu'
import Gallery from './views/gallery'
import ScrollAreaHorizontalDemo from './views/scrollareahorizontaldemo'
import Contact from './views/contact'




export default function Home() {
  return (
    <div>
      <Hero/>
       <Menu/>
       <Gallery/>
       <ScrollAreaHorizontalDemo/>
       <Contact/>
    </div>
  )
}