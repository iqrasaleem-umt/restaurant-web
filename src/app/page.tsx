import React from 'react'
import Hero from './views/hero'
import Menu from './views/menu'
import Gallery from './views/gallery'
import ScrollAreaHorizontalDemo from './views/scrollareahorizontaldemo'




export default function Home() {
  return (
    <div>
      <Hero/>
       <Menu/>
       <Gallery/>
       <ScrollAreaHorizontalDemo/>
    </div>
  )
}